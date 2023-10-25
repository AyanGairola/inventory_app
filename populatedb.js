console.log(
    'This script populates some test computer components'
  );
  
  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  
  const Cpu = require("./models/cpu");
  const Gpu = require("./models/gpu");
  const Motherboard = require("./models/motherboard");
  
  
  const cpus = [];
  const gpus = [];
  const motherboards = [];
  
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createCpus();
    await createGpus();
    await createMotherboards();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }

  async function cpuCreate(brand_name, model_name,status) {
    const cpuDetail = { brand_name, model_name,status };
    const cpu = new Cpu(cpuDetail);
    await cpu.save();
    cpus.push(cpu);
    console.log(`Added cpu: ${model_name}`);
  }
  async function gpuCreate(brand_name, model_name,status) {
    const gpuDetail = { brand_name, model_name,status };
    const gpu = new Gpu(gpuDetail);
    await gpu.save();
    gpus.push(gpu);
    console.log(`Added gpu: ${model_name}`);
  }
  async function motherboardCreate(brand_name, model_name,status,pin_type) {
    const motherboardDetail = { brand_name, model_name,status,pin_type};
    const motherboard = new Motherboard(motherboardDetail);
    await motherboard.save();
    motherboards.push(motherboard);
    console.log(`Added motherboard: ${model_name} , of pin-type : ${pin_type}`);
  }
  
  async function createCpus() {
    console.log("Adding Cpus");
    await cpuCreate("Intel","i5-8600k","available");
    await cpuCreate("Intel","i5-9600k","available");
    await cpuCreate("Intel","i5-10600k","available");
    await cpuCreate("Intel","i5-11600k","un-available");
    await cpuCreate("Intel","i5-12600k","available");
    await cpuCreate("Intel","i5-13600k","available");
    await cpuCreate("Intel","i7-8700k","available");
    await cpuCreate("Intel","i7-9700k","un-available");
    await cpuCreate("Intel","i7-10700k","available");
    await cpuCreate("Intel","i7-11700k","un-available");
    await cpuCreate("Intel","i7-12700k","available");
    await cpuCreate("Intel","i7-13700k","available");
    await cpuCreate("Intel","i9-10900k","available");
    await cpuCreate("Intel","i9-11900k","available");
    await cpuCreate("Intel","i9-12900k","available");
    await cpuCreate("Intel","i9-13900k","available");
  }
  async function createGpus() {
    console.log("Adding Gpus");
    await gpuCreate("Nvidea","RTX 3090","available");
    await gpuCreate("Nvidea","RTX 3090ti","available");
    await gpuCreate("Nvidea","RTX 3060","un-available");
    await gpuCreate("Nvidea","RTX 3060ti","available");
    await gpuCreate("Nvidea","RTX 4060","available");
    await gpuCreate("Nvidea","RTX 4070","available");
    await gpuCreate("Nvidea","RTX 4090","un-available");
    await gpuCreate("AMD","RX 6600","available");
    await gpuCreate("AMD","RX 5800XT","un-available");
    await gpuCreate("AMD","RX 7700XT","available");
    await gpuCreate("AMD","RX 6800","available");
  }
  async function createMotherboards() {
    console.log("Adding Motherboards");
    await motherboardCreate("ASUS","Z-790","available","LGA 1700");
    await motherboardCreate("ASUS","Z-490","available","LGA 1200");
    await motherboardCreate("ASUS","b650","available","AM5");
    await motherboardCreate("Gigabyte","Z-790","available","LGA 1700");
    await motherboardCreate("Gigabyte","Z-490","available","LGA 1200");
    await motherboardCreate("Gigabyte","b650","available","AM5");
    await motherboardCreate("MSI","Z-790","available","LGA 1700");
    await motherboardCreate("MSI","Z-490","available","LGA 1200");
    await motherboardCreate("MSI","b650","available","AM5");
   
  }