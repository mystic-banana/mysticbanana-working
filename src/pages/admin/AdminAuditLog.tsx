import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { 
  ClipboardList,
  Search,
  Filter,
  ChevronDown,
  User,
  FileText,
  Trash2,
  Edit,
  Plus,
  Settings,
  Loader2
} from 'lucide-react';
import { getAdminAuditLogs } from '../../lib/admin';

const AdminAuditLog: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('all');
  
  useEffect(() => {
    fetchLogs();
  }, []);
  
  const fetchLogs = async () => {
    try {
      setLoading(true);
      const data = await getAdminAuditLogs();
      setLogs(data);
    } catch (error) {
      console.error('Error fetching audit logs:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const getActionIcon = (action: string) => {
    switch (action) {
      case 'CREATE':
        return <Plus className="h-4 w-4" />;
      case 'UPDATE':
        return <Edit className="h-4 w-4" />;
      case 'DELETE':
        return <Trash2 className="h-4 w-4" />;
      default:
        return <Settings className="h-4 w-4" />;
    }
  };
  
  const filteredLogs = logs.filter(log => {
    const matchesAction = actionFilter === 'all' || log.action === actionFilter;
    const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.table_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.record_id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesAction && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-cinzel font-bold flex items-center">
            <ClipboardList className="mr-3 h-6 w-6 text-accent" />
            Audit Log
          </h1>
          <p className="text-white/70 mt-1">
            Track and monitor admin actions
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="card mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
              <input
                type="text"
                placeholder="Search audit logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10 w-full"
              />
            </div>
          </div>
          
          <div className="relative">
            <select
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
              className="input pr-10 appearance-none"
            >
              <option value="all">All Actions</option>
              <option value="CREATE">Create</option>
              <option value="UPDATE">Update</option>
              <option value="DELETE">Delete</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
          </div>
        </div>
      </div>
      
      {/* Logs List */}
      <div className="bg-surface/50 rounded-lg overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
        ) : filteredLogs.length === 0 ? (
          <div className="text-center p-8">
            <ClipboardList className="h-12 w-12 text-white/20 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">No audit logs found</h3>
            <p className="text-white/60">
              {searchTerm || actionFilter !== 'all'
                ? 'Try adjusting your filters'
                : 'No admin actions have been logged yet'}
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-background/40">
                <th className="py-3 px-4 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Admin</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Action</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Table</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Record ID</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-white/5">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-4 w-4 text-white/60" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium">Admin User</div>
                        <div className="text-xs text-white/60">{log.admin_users?.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className={`p-1 rounded-lg mr-2 ${
                        log.action === 'CREATE' ? 'bg-success/20 text-success' :
                        log.action === 'UPDATE' ? 'bg-warning/20 text-warning' :
                        'bg-error/20 text-error'
                      }`}>
                        {getActionIcon(log.action)}
                      </div>
                      <span>{log.action}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-accent mr-2" />
                      <span className="capitalize">{log.table_name.replace('_', ' ')}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-mono text-sm">{log.record_id}</span>
                  </td>
                  <td className="py-4 px-4 text-sm text-white/60">
                    {format(new Date(log.created_at), 'MMM d, yyyy HH:mm:ss')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminAuditLog;