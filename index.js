import { memoryUsage } from "node:process";
import path from "node:path";
import ReactPDF from "@react-pdf/renderer";
import { MyDocument } from "./MyDocument.js";

process.on("warning", (e) => console.warn(e.stack));

const docCount = 1000

const memoryLog = [];
memoryLog.push(memoryUsage());

for (let i = 0; i < docCount; i++) {
  await ReactPDF.render(
    MyDocument({ counter: i }),
    `${path.resolve()}/output/${i}.pdf`
  );
}

memoryLog.push(memoryUsage());

const getDiff = (memoryLog, prop) => {
  const lastItem = memoryLog.at(-1);
  const firstItem = memoryLog.at(0);
  const diff = lastItem[prop] - firstItem[prop];
  return Math.round(diff / 1024 / 1024);
};
console.log(`MemoryUsage diff in MB after ${docCount} PDF created:`);
console.log("rss: ", getDiff(memoryLog, "rss"));
console.log("heapTotal: ", getDiff(memoryLog, "heapTotal"));
console.log("heapUsed: ", getDiff(memoryLog, "heapUsed"));
console.log("external: ", getDiff(memoryLog, "external"));
console.log("arrayBuffers: ", getDiff(memoryLog, "arrayBuffers"));
