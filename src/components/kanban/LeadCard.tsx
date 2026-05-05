"use client";

import type { Lead } from "@/types";
import { Draggable } from "@hello-pangea/dnd";
import { MapPin, User, Building2 } from "lucide-react";

interface LeadCardProps {
  lead: Lead;
  index: number;
}

export default function LeadCard({ lead, index }: LeadCardProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("tr-TR", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    } catch {
      return dateString;
    }
  };

  return (
    <Draggable draggableId={lead.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`relative mb-3 flex flex-col rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md ${
            snapshot.isDragging ? "shadow-xl ring-2 ring-navy/20" : "shadow-sm"
          }`}
          style={{ ...provided.draggableProps.style }}
        >
          {/* Top Row: Date & Badge */}
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">
              {formatDate(lead.created_at)}
            </span>
            <span className="rounded-full bg-gold px-2 py-0.5 text-xs font-semibold text-navy">
              {lead.talep_turu}
            </span>
          </div>

          {/* User Info */}
          <div className="mb-2 flex items-center gap-2">
            <User className="h-4 w-4 text-navy/70" />
            <h4 className="font-bold text-navy truncate">{lead.isim}</h4>
          </div>

          {/* Location Details */}
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold shrink-0" />
              <span className="truncate">
                {lead.ilce} {lead.mahalle && `/ ${lead.mahalle}`}
              </span>
            </div>
            
            {(lead.ada || lead.parsel) && (
              <div className="flex items-center gap-2 mt-0.5">
                <Building2 className="h-4 w-4 text-gray-400 shrink-0" />
                <span className="text-xs font-medium text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100 inline-block">
                  Ada: {lead.ada || "-"} / Parsel: {lead.parsel || "-"}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}
