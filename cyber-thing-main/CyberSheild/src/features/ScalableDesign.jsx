import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScalableDesign = () => {
  const [metrics, setMetrics] = useState([
    { name: "Current Nodes", value: 8, capacity: 16, icon: "🖥️" },
    { name: "Database Shards", value: 4, capacity: 8, icon: "🗄️" },
    { name: "Memory Usage", value: 62, capacity: 100, unit: "%", icon: "🧠", warningThreshold: 80 },
    { name: "Network Throughput", value: 1.2, capacity: 2.5, unit: "Gbps", icon: "🌐", warningThreshold: 1.8 }
  ]);

  const [nodes, setNodes] = useState([
    { id: 1, status: 'active', load: 35 },
    { id: 2, status: 'active', load: 42 },
    { id: 3, status: 'active', load: 28 },
    { id: 4, status: 'active', load: 65 },
    { id: 5, status: 'warning', load: 78 },
    { id: 6, status: 'active', load: 51 },
    { id: 7, status: 'error', load: 92 },
    { id: 8, status: 'active', load: 37 },
  ]);

  const [isHovering, setIsHovering] = useState(null);
  const [viewMode, setViewMode] = useState('2D');
  const [isSimulating, setIsSimulating] = useState(false);

  // Simulate live data updates
  useEffect(() => {
    if (!isSimulating) return;
    
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        const fluctuation = Math.random() * 5 - 2.5; // Random value between -2.5 and 2.5
        let newValue = metric.value + fluctuation;
        
        // Keep values within reasonable bounds
        if (newValue < 0) newValue = 0;
        if (metric.unit === '%' && newValue > 100) newValue = 100;
        if (metric.name === 'Current Nodes' || metric.name === 'Database Shards') {
          newValue = Math.round(metric.value); // Keep these as whole numbers
        }
        
        return { ...metric, value: parseFloat(newValue.toFixed(2)) };
      }));

      setNodes(prev => prev.map(node => {
        const loadChange = Math.random() * 10 - 5; // Random value between -5 and 5
        let newLoad = node.load + loadChange;
        
        // Keep load between 0-100
        if (newLoad < 0) newLoad = 0;
        if (newLoad > 100) newLoad = 100;
        
        // Update status based on load
        let newStatus = node.status;
        if (newLoad > 90) newStatus = 'error';
        else if (newLoad > 70) newStatus = 'warning';
        else newStatus = 'active';
        
        return { ...node, load: parseFloat(newLoad.toFixed(1)), status: newStatus };
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleAddNode = () => {
    if (nodes.length >= 16) return;
    
    const newNodeId = nodes.length + 1;
    const newLoad = Math.floor(Math.random() * 30) + 10; // Random load between 10-40
    
    setNodes([...nodes, { id: newNodeId, status: 'active', load: newLoad }]);
    setMetrics(prev => prev.map(metric => 
      metric.name === "Current Nodes" 
        ? { ...metric, value: metric.value + 1 } 
        : metric
    ));
    
    // Pulse animation trigger
    setIsHovering(`node-${newNodeId}`);
    setTimeout(() => setIsHovering(null), 2000);
  };

  const handleScaleUp = () => {
    setMetrics(prev => prev.map(metric => {
      if (metric.name === "Database Shards") {
        return { ...metric, value: Math.min(metric.value + 1, metric.capacity) };
      }
      if (metric.name === "Memory Usage" || metric.name === "Network Throughput") {
        return { ...metric, capacity: metric.capacity * 1.5 };
      }
      return metric;
    }));
    
    // Show a toast notification
    const event = new CustomEvent('toast', { 
      detail: { 
        message: 'System capacity scaled up successfully', 
        type: 'success' 
      } 
    });
    window.dispatchEvent(event);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const nodeVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.3 }
    },
    pulse: {
      scale: [1, 1.1, 1],
      boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0.7)", "0 0 0 10px rgba(16, 185, 129, 0)", "0 0 0 0 rgba(16, 185, 129, 0)"],
      transition: { duration: 1.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0.1
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      <motion.header 
        className="bg-gray-800 border-b border-cyan-400/20 relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-lg"
              whileHover={{ rotate: 15 }}
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
              </svg>
            </motion.div>
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            >
              Cyber-Shield
            </motion.h1>
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <motion.li whileHover={{ scale: 1.05 }}>
                <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">Home</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <Link to="/scalabledesign" className="px-3 py-2 rounded-md bg-gray-700 text-cyan-400 font-medium">Scalable Design</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <Link to="/threathistory" className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">Threat History</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <Link to="/mitigationactions" className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">Mitigation Log</Link>
              </motion.li>
            </ul>
          </nav>

          <motion.button 
            className="md:hidden p-2 rounded-md hover:bg-gray-700"
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 relative z-10">
        {/* Page Header with Actions */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-4 md:mb-0">
            <motion.h1 
              className="text-3xl font-bold text-white mb-2"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Scalable Architecture Dashboard
            </motion.h1>
            <motion.p 
              className="text-gray-400"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            >
              Monitor and manage your distributed system resources
            </motion.p>
          </div>
          <div className="flex space-x-3">
            <motion.button 
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-medium flex items-center transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScaleUp}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Scale Up
            </motion.button>
            <motion.button 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium flex items-center transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddNode}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Node
            </motion.button>
            <motion.button 
              className={`px-4 py-2 rounded-md font-medium flex items-center transition-colors ${isSimulating ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-700 hover:bg-gray-600'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSimulating(!isSimulating)}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {isSimulating ? 'Stop Sim' : 'Live Sim'}
            </motion.button>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.section 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h2 
            className="text-xl font-semibold mb-4 text-white"
            whileHover={{ x: 5 }}
          >
            System Metrics
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {metrics.map((metric, index) => {
              const progress = (metric.value / metric.capacity) * 100;
              const isWarning = metric.warningThreshold && metric.value >= metric.warningThreshold;

              return (
                <motion.div
                  key={index}
                  className={`bg-gray-800 rounded-lg p-4 border ${isWarning ? 'border-yellow-500' : 'border-gray-700'} hover:border-cyan-400 transition-colors`}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-gray-300 font-medium">{metric.name}</h3>
                    <motion.span 
                      className="text-2xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    >
                      {metric.icon}
                    </motion.span>
                  </div>
                  <div className={`text-2xl font-bold mb-3 ${isWarning ? 'text-yellow-400' : 'text-white'}`}>
                    {metric.value}{metric.unit || ''} <span className="text-gray-400 text-lg">/ {metric.capacity}{metric.unit || ''}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className={`h-2.5 rounded-full ${progress > 90 ? 'bg-red-500' : isWarning ? 'bg-yellow-500' : 'bg-cyan-500'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Architecture Diagram */}
        <motion.section 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex justify-between items-center mb-4">
            <motion.h2 
              className="text-xl font-semibold text-white"
              whileHover={{ scale: 1.02 }}
            >
              System Architecture
            </motion.h2>
            <div className="flex space-x-2">
              <motion.button 
                className={`px-3 py-1 rounded text-sm transition-colors ${viewMode === '2D' ? 'bg-cyan-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('2D')}
              >
                2D View
              </motion.button>
              <motion.button 
                className={`px-3 py-1 rounded text-sm transition-colors ${viewMode === '3D' ? 'bg-cyan-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('3D')}
              >
                3D View
              </motion.button>
            </div>
          </div>

          <motion.div 
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            animate={{
              boxShadow: viewMode === '3D' 
                ? '0 20px 50px -10px rgba(6, 182, 212, 0.3)' 
                : 'none',
              transform: viewMode === '3D' 
                ? 'perspective(1000px) rotateX(5deg)' 
                : 'none'
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Load Balancer */}
            <motion.div 
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-3 px-6 rounded-lg shadow-lg w-full max-w-md relative">
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-700"></div>
                <h3 className="font-bold">Load Balancer</h3>
                <p className="text-sm text-blue-200">Distributes traffic across nodes</p>
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-lg opacity-0"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
              </div>
            </motion.div>

            {/* Nodes */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {nodes.map((node) => {
                let statusColor;
                if (node.status === 'active') statusColor = 'bg-green-500';
                if (node.status === 'warning') statusColor = 'bg-yellow-500';
                if (node.status === 'error') statusColor = 'bg-red-500';

                return (
                  <motion.div 
                    key={node.id}
                    className="bg-gray-700 rounded-lg p-3 text-center border border-gray-600 hover:border-cyan-400 transition-colors"
                    variants={nodeVariants}
                    initial="initial"
                    animate={isHovering === `node-${node.id}` ? "pulse" : "animate"}
                    whileHover="hover"
                    onHoverStart={() => setIsHovering(`node-${node.id}`)}
                    onHoverEnd={() => setIsHovering(null)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-400">#{node.id}</span>
                      <motion.span 
                        className={`w-2 h-2 rounded-full ${statusColor}`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </div>
                    <h4 className="font-medium">Node {node.id}</h4>
                    <div className="mt-2">
                      <div className="text-xs text-gray-400 mb-1">Load: {node.load}%</div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className={`h-1.5 rounded-full ${node.load > 90 ? 'bg-red-500' : node.load > 70 ? 'bg-yellow-500' : 'bg-green-500'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${node.load}%` }}
                          transition={{ duration: 1, delay: node.id * 0.05 }}
                        />
                      </div>
                    </div>
                    <motion.div 
                      className="mt-2 w-full h-1 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div 
                        className="h-full bg-cyan-500"
                        animate={{
                          x: [-100, 100],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{ width: `${100 - node.load}%` }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Database Cluster */}
            <motion.div 
              className="flex justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center py-3 px-6 rounded-lg shadow-lg w-full max-w-md relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-purple-700"></div>
                <h3 className="font-bold">Database Cluster</h3>
                <p className="text-sm text-purple-200">4 shards, 2 replicas each</p>
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-purple-400 rounded-lg opacity-0"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Recent Activity */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.h2 
            className="text-xl font-semibold mb-4 text-white"
            whileHover={{ scale: 1.02 }}
          >
            Recent Scaling Activity
          </motion.h2>
          <motion.div 
            className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
            whileHover={{ boxShadow: "0 0 20px -5px rgba(6, 182, 212, 0.3)" }}
          >
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Timestamp</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {[
                  { action: 'Added Node', status: 'Completed', timestamp: '2023-05-15 14:32:45', details: 'Node #8 added to cluster' },
                  { action: 'Memory Scale Up', status: 'Completed', timestamp: '2023-05-14 09:15:22', details: 'Increased memory to 64GB' },
                  { action: 'Database Shard', status: 'Pending', timestamp: '2023-05-12 18:45:10', details: 'Adding shard #5' },
                  { action: 'Load Balancer Config', status: 'Failed', timestamp: '2023-05-10 11:20:33', details: 'Timeout during config update' },
                ].map((item, index) => (
                  <motion.tr 
                    key={index} 
                    className="hover:bg-gray-750 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      <motion.div whileHover={{ x: 5 }}>{item.action}</motion.div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <motion.span 
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Completed' ? 'bg-green-900 text-green-200' :
                            item.status === 'Pending' ? 'bg-yellow-900 text-yellow-200' :
                              'bg-red-900 text-red-200'
                          }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.status}
                      </motion.span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      <motion.div whileHover={{ x: 5 }}>{item.timestamp}</motion.div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      <motion.div whileHover={{ x: 5 }}>{item.details}</motion.div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};

export default ScalableDesign;