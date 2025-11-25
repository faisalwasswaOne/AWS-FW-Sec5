import React from 'react';

const CheatSheet: React.FC = () => {
  const data = [
    { algo: "Linear Learner", use: "Regression, Classification", input: "RecordIO-Protobuf (Float32)", instance: "CPU (Multi-machine), GPU supported" },
    { algo: "XGBoost", use: "Tabular Classification/Regression", input: "CSV, LibSVM, Parquet, RecordIO", instance: "Memory-bound (M5), GPU supported" },
    { algo: "Seq2Seq", use: "Translation, Summarization", input: "RecordIO-Protobuf (Integer tokens)", instance: "GPU (P3) recommended" },
    { algo: "DeepAR", use: "Time Series Forecasting", input: "JSON Lines, Parquet", instance: "CPU start, GPU for large models" },
    { algo: "BlazingText", use: "Text Class., Word2Vec", input: "Text (sentences/words)", instance: "CPU (C5) or GPU (P3)" },
    { algo: "Object Detection", use: "Find objects (Boxes)", input: "RecordIO, JPEG/PNG", instance: "GPU required" },
    { algo: "Image Classification", use: "Label images", input: "RecordIO, JPEG/PNG", instance: "GPU recommended" },
    { algo: "Semantic Segmentation", use: "Pixel-level mask", input: "JPEG/PNG + Label maps", instance: "GPU required (Single machine)" },
    { algo: "Random Cut Forest", use: "Anomaly Detection", input: "CSV, RecordIO-Protobuf", instance: "CPU only" },
    { algo: "K-Means", use: "Clustering", input: "CSV, RecordIO-Protobuf", instance: "CPU recommended, 1 GPU/instance" },
    { algo: "KNN", use: "Classification/Regression", input: "CSV, RecordIO", instance: "CPU (latency), GPU (throughput)" },
    { algo: "IP Insights", use: "IP Anomaly Detection", input: "CSV (Entity, IP)", instance: "GPU recommended" },
    { algo: "LDA", use: "Topic Modeling (Stats)", input: "CSV, RecordIO", instance: "CPU only, Single instance" },
    { algo: "NTM", use: "Topic Modeling (Neural)", input: "CSV, RecordIO", instance: "GPU supported" },
    { algo: "PCA", use: "Dim. Reduction", input: "CSV, RecordIO", instance: "CPU or GPU" },
    { algo: "Factorization Machines", use: "Sparse Recommender", input: "RecordIO-Protobuf (Float32)", instance: "CPU recommended" },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Algorithm Cheat Sheet</h2>
        <p className="text-slate-500 mt-2">Quick reference for inputs and instance types.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 font-bold text-slate-700 text-sm uppercase tracking-wider">Algorithm</th>
                <th className="p-4 font-bold text-slate-700 text-sm uppercase tracking-wider">Primary Use Case</th>
                <th className="p-4 font-bold text-slate-700 text-sm uppercase tracking-wider">Input Format</th>
                <th className="p-4 font-bold text-slate-700 text-sm uppercase tracking-wider">Instance Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-orange-700">{row.algo}</td>
                  <td className="p-4 text-slate-600 text-sm">{row.use}</td>
                  <td className="p-4 text-slate-600 text-sm font-mono bg-slate-50/50">{row.input}</td>
                  <td className="p-4 text-slate-600 text-sm">{row.instance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheatSheet;
