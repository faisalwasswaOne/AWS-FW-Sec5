import { Chapter } from '../types';

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Introduction to Built-in Algorithms",
    part: "SageMaker Foundations & Tabular Learning",
    content: [
      {
        heading: "Overview",
        text: [
          "Amazon SageMaker provides a suite of built-in algorithms optimized for performance, scalability, and cost-efficiency on AWS infrastructure.",
          "They eliminate the need to write custom code for common ML tasks."
        ]
      },
      {
        heading: "Why Use Built-in Algorithms?",
        text: [
          "Time Savings: Pre-built, tested, and optimized.",
          "Scalability: Handle large-scale distributed training automatically.",
          "Cost Efficiency: Optimized for AWS infrastructure.",
          "Wide Coverage: Support for supervised/unsupervised, NLP, Vision, etc."
        ]
      }
    ],
    keyPoints: [
      "SageMaker appears on 60-70% of exam questions.",
      "Built-in algorithms reduce dev time from weeks to days."
    ]
  },
  {
    id: 3,
    title: "SageMaker Input Modes",
    part: "SageMaker Foundations & Tabular Learning",
    content: [
      {
        heading: "File Mode (Default)",
        text: [
          "Copies entire dataset from S3 to local Docker container.",
          "Pros: Simple, works with all algorithms.",
          "Cons: Slow start for large datasets, requires local storage."
        ]
      },
      {
        heading: "Pipe Mode",
        text: [
          "Streams data from S3 directly to algorithm.",
          "Pros: Faster start, no local storage needed.",
          "Cons: Sequential access only."
        ]
      },
      {
        heading: "Fast File Mode",
        text: [
          "Streams data like Pipe but supports random access.",
          "Pros: Fast startup, random access, no storage overhead.",
          "The recommended default for most modern workloads."
        ]
      },
      {
        heading: "Storage Optimizations",
        text: [
          "FSx for Lustre: For massive datasets and LLMs. Hundreds of GB/s throughput.",
          "EFS: For shared datasets across multiple jobs."
        ]
      }
    ],
    keyPoints: [
      "Slow startup? -> Use Pipe or Fast File.",
      "Not enough storage? -> Use Fast File or Pipe.",
      "Random access needed? -> Use Fast File.",
      "LLMs/Massive scale? -> FSx for Lustre."
    ]
  },
  {
    id: 4,
    title: "Linear Learner",
    part: "SageMaker Foundations & Tabular Learning",
    content: [
      {
        heading: "Capabilities",
        text: [
          "Linear Regression (Numerical prediction)",
          "Binary Classification",
          "Multi-class Classification"
        ]
      },
      {
        heading: "Input Format",
        text: [
          "Preferred: RecordIO-Protobuf with Float32 data.",
          "Alternative: CSV (First column = label)."
        ]
      },
      {
        heading: "Hyperparameters",
        text: [
          "l1 (Lasso): Feature selection, sparse models.",
          "wd (L2/Ridge): Smooth weights, prevent overfitting.",
          "balance_multiclass_weights: For imbalanced datasets."
        ]
      }
    ],
    keyPoints: [
      "Use for baselines or linearly separable data.",
      "Scales by adding more machines (CPU), not more GPUs per machine.",
      "Start with ml.m5.xlarge (CPU)."
    ]
  },
  {
    id: 5,
    title: "XGBoost",
    part: "SageMaker Foundations & Tabular Learning",
    content: [
      {
        heading: "Overview",
        text: [
          "Extreme Gradient Boosting. Ensemble of decision trees.",
          "Go-to algorithm for tabular/structured data."
        ]
      },
      {
        heading: "Preventing Overfitting",
        text: [
          "eta: Step size shrinkage (lower = prevents overfitting).",
          "subsample: < 1.0 prevents overfitting.",
          "max_depth: Too high = overfitting."
        ]
      },
      {
        heading: "Imbalanced Data",
        text: [
          "scale_pos_weight: sum(negative) / sum(positive)."
        ]
      }
    ],
    keyPoints: [
      "Memory-bound (use M5 instances).",
      "Supports GPU training (tree_method='gpu_hist').",
      "Distributed GPU training requires specific config (fully_replicated)."
    ]
  },
  {
    id: 6,
    title: "LightGBM",
    part: "SageMaker Foundations & Tabular Learning",
    content: [
      {
        heading: "Overview",
        text: [
          "Gradient Boosted Decision Trees, faster training than XGBoost for large datasets.",
          "CPU-only (No GPU support)."
        ]
      },
      {
        heading: "Input Format",
        text: [
          "Text CSV only (No headers)."
        ]
      },
      {
        heading: "Hyperparameters",
        text: [
          "min_data_in_leaf: Key for preventing overfitting."
        ]
      }
    ],
    keyPoints: [
      "LightGBM = Light on GPUs (CPU Only).",
      "Faster than XGBoost for very large datasets."
    ]
  },
  {
    id: 7,
    title: "Seq2Seq",
    part: "NLP & Sequential Data",
    content: [
      {
        heading: "Overview",
        text: [
          "Transforms one sequence of tokens to another.",
          "Use cases: Machine Translation, Text Summarization, Speech-to-Text."
        ]
      },
      {
        heading: "Input Format",
        text: [
          "RecordIO-Protobuf with INTEGER tokens (not Float32).",
          "Requires tokenized text + vocabulary files."
        ]
      },
      {
        heading: "Metrics",
        text: [
          "BLEU score",
          "Perplexity"
        ]
      }
    ],
    keyPoints: [
      "Seq2Seq needs integers, not floats.",
      "Computationally intensive: Use P3 instances (GPU)."
    ]
  },
  {
    id: 8,
    title: "DeepAR",
    part: "NLP & Sequential Data",
    content: [
      {
        heading: "Overview",
        text: [
          "Forecasting time series using RNNs.",
          "Trains on multiple related time series simultaneously."
        ]
      },
      {
        heading: "Input Format",
        text: [
          "JSON Lines or Parquet.",
          "Required fields: start, target."
        ]
      },
      {
        heading: "Best Practices",
        text: [
          "Don't predict more than 400 points into future.",
          "Train on many related series to unlock power."
        ]
      }
    ],
    keyPoints: [
      "Start with CPU (c4/c5), move to GPU only for large models.",
      "Recognize time series forecasting -> DeepAR."
    ]
  },
  {
    id: 9,
    title: "BlazingText",
    part: "NLP & Sequential Data",
    content: [
      {
        heading: "Modes",
        text: [
          "Text Classification (Supervised): Predicts labels for sentences.",
          "Word2Vec (Unsupervised): Creates word embeddings."
        ]
      },
      {
        heading: "Input Format",
        text: [
          "Text Classification: Sentence with '__label__' prefix.",
          "Word2Vec: Text file with one sentence per line."
        ]
      }
    ],
    keyPoints: [
      "Batch Skip-gram mode allows distributed CPU training.",
      "Text classification works on sentences, not full documents."
    ]
  },
  {
    id: 11,
    title: "Object Detection",
    part: "Computer Vision",
    content: [
      {
        heading: "Overview",
        text: [
          "Detects AND classifies multiple objects.",
          "Output: Bounding boxes + Labels + Confidence scores."
        ]
      },
      {
        heading: "Algorithms",
        text: [
          "MXNet: Single Shot Multibox Detector (SSD).",
          "TensorFlow variants available."
        ]
      }
    ],
    keyPoints: [
      "Needs GPU for training.",
      "Difference from Image Classification: Gives bounding boxes."
    ]
  },
  {
    id: 12,
    title: "Image Classification",
    part: "Computer Vision",
    content: [
      {
        heading: "Overview",
        text: [
          "Assigns labels to entire image.",
          "No spatial info (no boxes)."
        ]
      },
      {
        heading: "Input",
        text: [
          "JPEG/PNG or RecordIO.",
          "Default MXNet size: 224x224 (3-channel)."
        ]
      }
    ],
    keyPoints: [
      "Labels only (What is it?), not location (Where is it?).",
      "Transfer learning reduces training time."
    ]
  },
  {
    id: 13,
    title: "Semantic Segmentation",
    part: "Computer Vision",
    content: [
      {
        heading: "Overview",
        text: [
          "Pixel-level classification.",
          "Output: Segmentation mask (colored overlay)."
        ]
      },
      {
        heading: "Algorithms",
        text: [
          "FCN, PSP, DeepLab v3."
        ]
      },
      {
        heading: "Constraints",
        text: [
          "Single machine training only (can use multi-GPU).",
          "Requires GPU for training."
        ]
      }
    ],
    keyPoints: [
      "Most precise (pixel-level), slowest.",
      "Critical for autonomous vehicles (lane boundaries)."
    ]
  },
  {
    id: 14,
    title: "Random Cut Forest (RCF)",
    part: "Clustering & Anomaly",
    content: [
      {
        heading: "Overview",
        text: [
          "Unsupervised anomaly detection.",
          "Works on streaming or batch data."
        ]
      },
      {
        heading: "Tuning",
        text: [
          "num_samples_per_tree: Set such that 1/value approx anomaly ratio."
        ]
      }
    ],
    keyPoints: [
      "Available in SageMaker AND Kinesis Analytics.",
      "CPU only (simple algorithm)."
    ]
  },
  {
    id: 21,
    title: "IP Insights",
    part: "Specialized",
    content: [
      {
        heading: "Overview",
        text: [
          "Detects suspicious behavior from IP addresses.",
          "Unsupervised learning using neural networks."
        ]
      },
      {
        heading: "Input",
        text: [
          "CSV with two columns: Entity (User) and IP Address."
        ]
      }
    ],
    keyPoints: [
      "Use for fraud detection, account compromise.",
      "hash_size should be 2x number of unique entities."
    ]
  }
];
