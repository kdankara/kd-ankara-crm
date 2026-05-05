"use client";

import { useEffect, useState } from "react";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import { supabase } from "@/lib/supabaseClient";
import LeadCard from "./LeadCard";
import type { Lead } from "@/types";
import { toast } from "sonner";

const COLUMNS = [
  "Yeni Talep",
  "Ön Analiz Aşamasında",
  "Malik Toplantısı Bekliyor",
  "Sözleşme Süreci",
  "Kazanıldı",
  "İptal",
];

export default function KanbanBoard() {
  const [mounted, setMounted] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  // Fetch initial data
  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    setMounted(true);
    fetchLeads();

    // Set up Realtime Listener
    const channel = supabase
      .channel("public:leads")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "leads" },
        (payload) => {
          const newLead = payload.new as Lead;
          setLeads((prev) => {
            if (prev.some((l) => l.id === newLead.id)) return prev;
            return [newLead, ...prev];
          });
          toast.success(`Yeni Talep: ${newLead.ilce || "Bilinmeyen"} bölgesinden yeni bir ön analiz talebi geldi!`);
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "leads" },
        (payload) => {
          const updatedLead = payload.new as Lead;
          setLeads((prev) =>
            prev.map((lead) =>
              lead.id === updatedLead.id ? { ...lead, ...updatedLead } : lead
            )
          );
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "leads" },
        (payload) => {
          const deletedId = payload.old.id;
          setLeads((prev) => prev.filter((lead) => lead.id !== deletedId));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getLeadsByColumn = (columnName: string) => {
    return leads.filter((lead) => lead.status === columnName);
  };

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // Dropped outside a column or didn't move columns
    if (!destination || destination.droppableId === source.droppableId) {
      return;
    }

    const leadId = parseInt(draggableId, 10);
    const newStatus = destination.droppableId;
    const previousState = [...leads]; // Save for rollback

    // 1. Optimistic Update
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      )
    );

    // 2. Database Update
    const { error } = await supabase
      .from("leads")
      .update({ status: newStatus })
      .eq("id", leadId);

    // 3. Rollback on Error
    if (error) {
      console.error("Drag update error:", error);
      setLeads(previousState);
      toast.error("Durum güncellenirken bir hata oluştu! Değişiklik geri alındı.");
    }
  };

  if (!mounted) {
    return null; // Avoid hydration mismatch on Next.js
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-navy border-t-gold"></div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col relative">
      {/* Kanban Container with Horizontal Scroll and Snap */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex h-full w-full gap-6 overflow-x-auto snap-x snap-mandatory pb-4 custom-scrollbar">
          {COLUMNS.map((column) => (
            <div
              key={column}
              className="flex h-full min-w-[320px] max-w-[320px] shrink-0 snap-center flex-col rounded-xl bg-gray-100/80 p-4 border border-gray-200"
            >
              {/* Column Header */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-navy truncate pr-2">{column}</h3>
                <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-navy/10 px-2 text-xs font-bold text-navy">
                  {getLeadsByColumn(column).length}
                </span>
              </div>

              {/* Droppable Area */}
              <Droppable droppableId={column}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex-1 overflow-y-auto custom-scrollbar pr-1 ${
                      snapshot.isDraggingOver ? "bg-navy/5 rounded-lg" : ""
                    }`}
                  >
                    {getLeadsByColumn(column).map((lead, index) => (
                      <LeadCard key={lead.id} lead={lead} index={index} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
