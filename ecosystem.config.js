module.exports = {
  apps: [
    {
      name: 'Publisher Application',
      script: 'index.js',
      instances: 6,
      autorestart: true,
      exec_mode: "cluster",
      watch: true,
      max_memory_restart: '1G'
    },
    {
      name: 'Subscriber-1',
      script: 'subscribers/subscriber-worker1.js',
      instances: 1
    },
    {
      name: 'Subscriber-2',
      script: 'subscribers/subscriber-worker2.js',
      instances: 1
    }
  ]
};
