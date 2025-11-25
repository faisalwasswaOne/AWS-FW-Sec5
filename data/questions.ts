import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    category: "Foundations & Tabular",
    question: "A machine learning engineer is training a Linear Learner model on a large dataset stored in Amazon S3. The training job is taking too long to start because the data download is very slow. Which input mode should be used to improve training startup time?",
    options: [
      "A. File mode with S3 Standard storage class",
      "B. Pipe mode to stream data from S3",
      "C. Fast File mode with random access support",
      "D. Download all data to EBS volume first"
    ],
    correctAnswer: "C",
    explanation: "Fast File mode is the recommended solution. It streams data from S3 (avoiding full download wait) while maintaining random access capabilities. It has largely replaced Pipe mode as the default for modern workloads."
  },
  {
    id: 2,
    category: "Foundations & Tabular",
    question: "A data scientist is using SageMaker Linear Learner for a classification task. The model is overfitting to the training data. Which hyperparameters should be adjusted to reduce overfitting? (Select TWO)",
    options: [
      "A. Increase L1 regularization",
      "B. Decrease learning rate",
      "C. Increase L2 regularization (weight_decay)",
      "D. Increase number of epochs",
      "E. Disable data normalization"
    ],
    correctAnswer: "A, C",
    explanation: "Increasing L1 regularization (feature selection/sparse models) and increasing L2 regularization (weight decay/smooth weights) are the primary tools for controlling overfitting in Linear Learner."
  },
  {
    id: 3,
    category: "Foundations & Tabular",
    question: "A company is deploying a Linear Learner model and wants to scale training across multiple machines. The team plans to use instances with multiple GPUs per machine. What is the most cost-effective instance configuration?",
    options: [
      "A. Single ml.p3.16xlarge instance with 8 GPUs",
      "B. Four ml.p3.2xlarge instances with 1 GPU each",
      "C. Two ml.m5.4xlarge CPU instances",
      "D. Single ml.p3.2xlarge instance"
    ],
    correctAnswer: "C",
    explanation: "Linear Learner scales across multiple machines but does NOT benefit from multiple GPUs on a single machine. Using CPU instances (M5) across multiple machines is typically most cost-effective."
  },
  {
    id: 4,
    category: "Foundations & Tabular",
    question: "An ML engineer needs to train an XGBoost model on a very large dataset with 500GB of data. The model is overfitting. Which hyperparameter adjustment will help prevent overfitting?",
    options: [
      "A. Increase max_depth",
      "B. Decrease subsample parameter",
      "C. Decrease eta (learning rate)",
      "D. Increase scale_pos_weight"
    ],
    correctAnswer: "C",
    explanation: "Decreasing eta (step size shrinkage) makes learning more conservative and is a primary overfitting control. Increasing max_depth increases complexity (risk of overfitting)."
  },
  {
    id: 5,
    category: "Foundations & Tabular",
    question: "A data science team wants to use XGBoost with distributed GPU training across multiple instances. They're using XGBoost version 1.5 in SageMaker. What configuration is required? (Select THREE)",
    options: [
      "A. Set tree_method='gpu_hist'",
      "B. Use CSV or Parquet input format",
      "C. Set use_dask_gpu_training=True",
      "D. Set distribution parameter to 'fully_replicated'",
      "E. Use RecordIO-Protobuf format"
    ],
    correctAnswer: "A, C, D",
    explanation: "Distributed GPU training in XGBoost 1.5+ requires: tree_method='gpu_hist', use_dask_gpu_training=True, and distribution='fully_replicated'. It does not support RecordIO."
  },
  {
    id: 6,
    category: "Foundations & Tabular",
    question: "Which SageMaker built-in algorithm is CPU-only and does NOT support GPU acceleration?",
    options: [
      "A. XGBoost",
      "B. LightGBM",
      "C. Linear Learner",
      "D. Image Classification"
    ],
    correctAnswer: "B",
    explanation: "LightGBM and LDA are examples of CPU-only algorithms in SageMaker. XGBoost supports GPU training."
  },
  {
    id: 7,
    category: "Foundations & Tabular",
    question: "A company has an imbalanced dataset where positive cases represent only 2% of the data. They're using XGBoost for classification. Which hyperparameter should be adjusted?",
    options: [
      "A. eta",
      "B. scale_pos_weight",
      "C. max_depth",
      "D. eval_metric"
    ],
    correctAnswer: "B",
    explanation: "scale_pos_weight is used to balance positive and negative weights for imbalanced datasets in XGBoost."
  },
  {
    id: 8,
    category: "Foundations & Tabular",
    question: "An ML team is experiencing overfitting with their LightGBM model. Which hyperparameter should they adjust?",
    options: [
      "A. learning_rate",
      "B. num_leaves",
      "C. min_data_in_leaf",
      "D. bagging_fraction"
    ],
    correctAnswer: "C",
    explanation: "Increasing min_data_in_leaf is the exam-recommended parameter for addressing overfitting in LightGBM by requiring minimum samples per leaf node."
  },
  {
    id: 9,
    category: "Foundations & Tabular",
    question: "A machine learning engineer needs to configure SageMaker to handle training data stored in Amazon FSx for Lustre. What is a requirement for this configuration?",
    options: [
      "A. Data must be in RecordIO-Protobuf format",
      "B. A VPC configuration is required",
      "C. Only GPU instances are supported",
      "D. Data must be replicated across multiple AZs"
    ],
    correctAnswer: "B",
    explanation: "FSx for Lustre requires VPC configuration when used with SageMaker. It is also a single-AZ solution."
  },
  {
    id: 10,
    category: "Foundations & Tabular",
    question: "Which storage option provides the highest throughput for training large language models with massive datasets in SageMaker?",
    options: [
      "A. S3 Standard with File mode",
      "B. S3 Express One Zone with Fast File mode",
      "C. Amazon FSx for Lustre",
      "D. Amazon EFS"
    ],
    correctAnswer: "C",
    explanation: "For extreme-scale training like LLMs with TB-scale datasets, FSx for Lustre provides the best performance (hundreds of GB/s throughput)."
  },
  {
    id: 11,
    category: "NLP & Sequential",
    question: "A data scientist is building a machine translation system to translate English to German. Which SageMaker algorithm should they use?",
    options: [
      "A. BlazingText",
      "B. Seq2Seq",
      "C. Object2Vec",
      "D. Neural Topic Model"
    ],
    correctAnswer: "B",
    explanation: "Seq2Seq is designed for sequence-to-sequence transformations like machine translation, text summarization, and speech-to-text."
  },
  {
    id: 12,
    category: "NLP & Sequential",
    question: "What is the required input data format for SageMaker Seq2Seq algorithm?",
    options: [
      "A. CSV with UTF-8 encoded text",
      "B. JSON Lines with sentence pairs",
      "C. RecordIO-Protobuf with Float32 data",
      "D. RecordIO-Protobuf with integer tokens"
    ],
    correctAnswer: "D",
    explanation: "Seq2Seq requires RecordIO-Protobuf format with integer tokens representing word indices. This is unique compared to algorithms requiring Float32."
  },
  {
    id: 13,
    category: "NLP & Sequential",
    question: "Which metrics are specifically designed for evaluating machine translation models in SageMaker Seq2Seq?",
    options: [
      "A. Accuracy and F1 score",
      "B. Precision and Recall",
      "C. BLEU score and Perplexity",
      "D. RMSE and MAE"
    ],
    correctAnswer: "C",
    explanation: "BLEU score (compares against reference translations) and Perplexity (cross-entropy metric) are specialized metrics for machine translation."
  },
  {
    id: 14,
    category: "NLP & Sequential",
    question: "A retail company wants to forecast demand for products across 500 stores. They have 3 years of historical sales data for each store. Which algorithm should they use?",
    options: [
      "A. Linear Learner with regression",
      "B. XGBoost",
      "C. DeepAR",
      "D. Random Cut Forest"
    ],
    correctAnswer: "C",
    explanation: "DeepAR excels at forecasting when you have multiple related time series (e.g., 500 stores), learning patterns across all series simultaneously."
  },
  {
    id: 15,
    category: "NLP & Sequential",
    question: "What is the maximum recommended prediction length for DeepAR to maintain reliability?",
    options: [
      "A. 100 data points",
      "B. 400 data points",
      "C. 1000 data points",
      "D. Unlimited"
    ],
    correctAnswer: "B",
    explanation: "DeepAR predictions typically become unreliable beyond 400 points into the future."
  },
  {
    id: 16,
    category: "NLP & Sequential",
    question: "For DeepAR training, what is the recommended instance type to start with?",
    options: [
      "A. ml.p3.2xlarge (GPU)",
      "B. ml.c4.2xlarge (CPU)",
      "C. ml.g5.xlarge (GPU)",
      "D. ml.m5.large (CPU)"
    ],
    correctAnswer: "B",
    explanation: "Despite being a neural network, DeepAR recommendations favor CPU (ml.c4) initially. GPU is reserved for large models or large mini-batches."
  },
  {
    id: 17,
    category: "NLP & Sequential",
    question: "A data scientist is using BlazingText for text classification. What should be the format of the first word in each training sentence?",
    options: [
      "A. The actual label text (e.g., 'positive')",
      "B. __label__ where N is the label number",
      "C. A numeric label (e.g., 0, 1, 2)",
      "D. token"
    ],
    correctAnswer: "B",
    explanation: "BlazingText text classification requires the '__label__' prefix followed by the label text/number (e.g., '__label__4') at the start of each line."
  },
  {
    id: 18,
    category: "NLP & Sequential",
    question: "Which BlazingText mode can be distributed across multiple CPU instances?",
    options: [
      "A. CBOW (Continuous Bag of Words)",
      "B. Skip-gram",
      "C. Batch Skip-gram",
      "D. Text Classification"
    ],
    correctAnswer: "C",
    explanation: "Batch Skip-gram is the only Word2Vec mode in BlazingText that supports distributed training across multiple CPU instances."
  },
  {
    id: 19,
    category: "NLP & Sequential",
    question: "What is a key limitation of BlazingText compared to modern NLP approaches?",
    options: [
      "A. It cannot handle Unicode text",
      "B. It only works on sentences, not full documents (text classification mode)",
      "C. It requires GPU acceleration",
      "D. It doesn't support multiple languages"
    ],
    correctAnswer: "B",
    explanation: "BlazingText text classification is designed for sentences. For Word2Vec, it works on words. It is not designed for full document processing like modern transformers."
  },
  {
    id: 20,
    category: "NLP & Sequential",
    question: "An e-commerce company wants to build a recommendation system that finds similar products based on user-product interactions. Which algorithm creates embeddings for this use case?",
    options: [
      "A. BlazingText",
      "B. Object2Vec",
      "C. Factorization Machines",
      "D. Linear Learner"
    ],
    correctAnswer: "B",
    explanation: "Object2Vec generalizes Word2Vec to arbitrary objects and creates embeddings for pairs of objects (user-product), making it ideal for similarity-based recommendations."
  },
  {
    id: 21,
    category: "Computer Vision",
    question: "What is the key difference between Object Detection and Image Classification in SageMaker?",
    options: [
      "A. Object Detection uses CNNs while Image Classification uses RNNs",
      "B. Object Detection provides bounding boxes while Image Classification only provides labels",
      "C. Object Detection is unsupervised while Image Classification is supervised",
      "D. Object Detection works on video while Image Classification works on images"
    ],
    correctAnswer: "B",
    explanation: "Object Detection returns labels AND bounding box coordinates (location). Image Classification returns only labels (categories) for the whole image."
  },
  {
    id: 22,
    category: "Computer Vision",
    question: "A manufacturing company needs to identify the exact pixel-level boundaries of defects in product images for robotic repair systems. Which algorithm should they use?",
    options: [
      "A. Image Classification",
      "B. Object Detection",
      "C. Semantic Segmentation",
      "D. Object2Vec"
    ],
    correctAnswer: "C",
    explanation: "Semantic Segmentation classifies every pixel, providing the exact boundaries (masks) needed for precise robotic tasks."
  },
  {
    id: 23,
    category: "Computer Vision",
    question: "Which SageMaker computer vision algorithm has the limitation of training on a single machine only (cannot distribute across multiple machines)?",
    options: [
      "A. Object Detection",
      "B. Image Classification",
      "C. Semantic Segmentation",
      "D. None, all can distribute"
    ],
    correctAnswer: "C",
    explanation: "Semantic Segmentation in SageMaker is limited to single-machine training (though it can utilize multiple GPUs on that single machine)."
  },
  {
    id: 24,
    category: "Computer Vision",
    question: "For Semantic Segmentation training in SageMaker, which instance types are supported?",
    options: [
      "A. CPU only",
      "B. GPU only",
      "C. CPU or GPU",
      "D. TPU only"
    ],
    correctAnswer: "B",
    explanation: "Semantic Segmentation training REQUIRES GPU instances (P2, P3, G4, G5). CPU is not supported for training."
  },
  {
    id: 25,
    category: "Computer Vision",
    question: "Which algorithm choices are available for Semantic Segmentation in SageMaker? (Select THREE)",
    options: [
      "A. FCN (Fully Convolutional Network)",
      "B. YOLO",
      "C. PSP (Pyramid Scene Parsing)",
      "D. DeepLab v3",
      "E. Mask R-CNN"
    ],
    correctAnswer: "A, C, D",
    explanation: "SageMaker supports FCN, PSP, and DeepLab v3. YOLO is an object detection algorithm."
  },
  {
    id: 31,
    category: "Clustering & Anomaly",
    question: "Which SageMaker algorithm would you use to detect anomalies in streaming IoT sensor data in real-time?",
    options: [
      "A. K-Means",
      "B. Random Cut Forest",
      "C. PCA",
      "D. KNN"
    ],
    correctAnswer: "B",
    explanation: "Random Cut Forest (RCF) is designed for anomaly detection and is available in both SageMaker and Kinesis Analytics for real-time streaming data."
  },
  {
    id: 33,
    category: "Clustering & Anomaly",
    question: "What is the key difference between KNN and K-Means?",
    options: [
      "A. KNN is unsupervised, K-Means is supervised",
      "B. KNN is supervised, K-Means is unsupervised",
      "C. KNN uses neural networks, K-Means doesn't",
      "D. They are the same algorithm with different names"
    ],
    correctAnswer: "B",
    explanation: "KNN (K-Nearest Neighbors) is supervised (needs labeled data for classification/regression). K-Means is unsupervised clustering (groups data without labels)."
  },
  {
    id: 35,
    category: "Clustering & Anomaly",
    question: "How should a data scientist determine the optimal number of clusters (k) for K-Means?",
    options: [
      "A. Always use k=10",
      "B. Use the elbow method on WCSS vs k plot",
      "C. Set k equal to the number of features",
      "D. Use cross-validation"
    ],
    correctAnswer: "B",
    explanation: "The elbow method plots the within-cluster sum of squares (WCSS) against different k values to find the point of diminishing returns (the 'elbow')."
  },
  {
    id: 41,
    category: "Topic Modeling",
    question: "What is the main difference between Neural Topic Model (NTM) and Latent Dirichlet Allocation (LDA)?",
    options: [
      "A. NTM is supervised, LDA is unsupervised",
      "B. NTM uses neural networks, LDA uses statistical methods",
      "C. NTM works on images, LDA works on text",
      "D. NTM requires labeled data, LDA doesn't"
    ],
    correctAnswer: "B",
    explanation: "Both are unsupervised topic modeling algorithms. NTM uses a neural network approach (variational inference), while LDA uses a statistical/probabilistic approach."
  },
  {
    id: 44,
    category: "Dimensionality Reduction",
    question: "What is the primary use case for Principal Component Analysis (PCA)?",
    options: [
      "A. Classification",
      "B. Regression",
      "C. Dimensionality reduction",
      "D. Anomaly detection"
    ],
    correctAnswer: "C",
    explanation: "PCA is a dimensionality reduction technique that projects high-dimensional data into a lower-dimensional space while preserving variance."
  },
  {
    id: 46,
    category: "Specialized",
    question: "Which algorithm is specifically designed for recommender systems with sparse user-item interaction data?",
    options: [
      "A. K-Means",
      "B. Object2Vec",
      "C. Factorization Machines",
      "D. Linear Learner"
    ],
    correctAnswer: "C",
    explanation: "Factorization Machines are specifically designed to handle sparse data (like user-item matrices) and model pairwise interactions for recommender systems."
  },
  {
    id: 50,
    category: "Specialized",
    question: "A security team wants to detect unusual login patterns from IP addresses across 50,000 user accounts. Which algorithm and instance type should they use?",
    options: [
      "A. Random Cut Forest on ml.c5.xlarge",
      "B. IP Insights on ml.p3.2xlarge",
      "C. K-Means on ml.m5.large",
      "D. Factorization Machines on ml.p2.xlarge"
    ],
    correctAnswer: "B",
    explanation: "IP Insights is purpose-built for detecting anomalous IP behavior. Since it uses neural networks, GPU instances (P3) are recommended."
  }
];
