import KanbanBoard from "@/components/kanban/KanbanBoard";

export default function AdminDashboardPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-navy">Müşteri Talepleri Panosu</h2>
          <p className="text-sm text-gray-500 mt-1">
            Gelen talepleri durumlarına göre sürükleyip bırakarak yönetin.
          </p>
        </div>
      </div>
      
      {/* Kanban Board Container */}
      <div className="flex-1 overflow-hidden min-h-[600px]">
        <KanbanBoard />
      </div>
    </div>
  );
}
