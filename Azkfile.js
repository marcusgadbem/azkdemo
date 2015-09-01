systems({
  azkdemo: {
    depends: [],
    image: {"docker": "azukiapp/node:0.12"},
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: "npm start",
    mounts: {
      '/azk/#{manifest.dir}': path("."),
    },
    scalable: {"default": 1},
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      http: "9999/tcp",
    },
    wait: {"retry": 20, "timeout": 1000},
    envs: {
      NODE_ENV: "dev",
      PORT: "1111",
    },
  }
});
