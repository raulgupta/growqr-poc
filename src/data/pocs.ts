export interface POC {
  id: string;
  title: string;
  duration: string;
  complexity: "Low" | "Medium" | "High";
  category: "Cloud-Based" | "Hybrid" | "Local" | "Integration";
  description: string;
  objective: string;
  techStack: string[];
  deliverables: string[];
  keyFeatures: string[];
  successMetrics: string[];
  risks: string[];
}

export const pocs: POC[] = [
  // === CLOUD-BASED POCs ===
  {
    id: "poc-1",
    title: "GPT-4 + ElevenLabs Voice Interview System",
    duration: "2 days",
    complexity: "Low",
    category: "Cloud-Based",
    description: "Build a minimal interview system using GPT-4 for question generation and ElevenLabs for voice synthesis",
    objective: "Validate the quality of AI-generated interview questions and voice output for candidate assessment",
    techStack: [
      "OpenAI GPT-4 API",
      "ElevenLabs API",
      "Next.js/React frontend",
      "Node.js backend",
      "WebSockets for real-time audio"
    ],
    deliverables: [
      "Working interview chatbot with voice responses",
      "5-10 sample interview questions for a software engineering role",
      "Audio quality assessment report",
      "Cost analysis per interview session",
      "Demo video"
    ],
    keyFeatures: [
      "Real-time question generation",
      "Text-to-speech responses",
      "Basic conversation flow",
      "Response logging"
    ],
    successMetrics: [
      "Voice quality rated 4/5 or higher",
      "Interview flow feels natural",
      "Average cost per interview under $2",
      "Response latency under 3 seconds"
    ],
    risks: [
      "API rate limits",
      "High per-interview costs at scale",
      "Latency issues with sequential API calls"
    ]
  },
  {
    id: "poc-2",
    title: "Akool Avatar + GPT-4 Interview Prototype",
    duration: "2-3 days",
    complexity: "Medium",
    category: "Cloud-Based",
    description: "Create an avatar-based interview system combining Akool's all-in-one avatar + voice solution with GPT-4 for intelligence",
    objective: "Test the feasibility of avatar-driven interviews and measure candidate engagement using simplified architecture",
    techStack: [
      "Akool Streaming Avatar API (Avatar + Voice + Lip-sync)",
      "OpenAI GPT-4 API",
      "Agora RTC",
      "Next.js 14 frontend",
      "PostgreSQL + Prisma"
    ],
    deliverables: [
      "Avatar interviewer with perfect lip-sync",
      "Complete 10-minute interview demo",
      "User engagement metrics dashboard",
      "Technical feasibility report",
      "Cost-per-interview analysis"
    ],
    keyFeatures: [
      "Animated avatar with facial expressions",
      "Built-in voice synthesis with perfect lip-sync",
      "Dynamic question adaptation via GPT-4",
      "Video recording of sessions",
      "Speech-to-text with Voice Activity Detection"
    ],
    successMetrics: [
      "Avatar lip-sync accuracy > 80%",
      "Candidate engagement score > 7/10",
      "System handles 5+ concurrent interviews",
      "End-to-end latency under 5 seconds",
      "Cost per interview under $2.50"
    ],
    risks: [
      "Avatar realism may not meet expectations",
      "API orchestration complexity (Akool + GPT-4)",
      "High bandwidth requirements for streaming",
      "Real-time performance at scale"
    ]
  },
  {
    id: "poc-3",
    title: "Claude 3 + Synthesia Pre-recorded Interview Builder",
    duration: "2 days",
    complexity: "Low",
    category: "Cloud-Based",
    description: "Build a tool to generate pre-recorded interview videos using Claude 3 and Synthesia",
    objective: "Create a library of reusable interview question videos for asynchronous candidate assessment",
    techStack: [
      "Anthropic Claude 3 API",
      "Synthesia API",
      "Next.js admin panel",
      "Video storage (AWS S3/Cloudflare)",
      "PostgreSQL for question library"
    ],
    deliverables: [
      "20+ pre-recorded interview question videos",
      "Admin panel for generating new questions",
      "Question categorization system (technical, behavioral, etc.)",
      "Cost per video analysis",
      "Quality comparison report"
    ],
    keyFeatures: [
      "Bulk video generation",
      "Multiple avatar options",
      "Question templating system",
      "Video preview and approval workflow"
    ],
    successMetrics: [
      "Generate 20 videos in under 4 hours",
      "Video quality acceptable for production use",
      "Cost per video under $5",
      "No manual editing required"
    ],
    risks: [
      "Synthesia rendering time delays",
      "Limited real-time interaction",
      "Video quality may not meet expectations"
    ]
  },
  // === HYBRID POCs ===
  {
    id: "poc-4",
    title: "Local Llama 3 + Cloud ElevenLabs Hybrid System",
    duration: "3 days",
    complexity: "Medium",
    category: "Hybrid",
    description: "Implement a cost-optimized hybrid system using local Llama 3 for logic and cloud ElevenLabs for voice",
    objective: "Demonstrate cost savings of hybrid architecture while maintaining quality",
    techStack: [
      "Llama 3 70B (quantized) via Ollama",
      "ElevenLabs API",
      "FastAPI backend",
      "Next.js frontend",
      "vLLM or llama.cpp for inference"
    ],
    deliverables: [
      "Working hybrid interview system",
      "Cost comparison vs full-cloud solution",
      "Performance benchmarks (latency, throughput)",
      "Hardware requirements documentation",
      "Scaling strategy recommendations"
    ],
    keyFeatures: [
      "Local LLM for question generation",
      "Cloud voice synthesis for quality",
      "Smart request routing",
      "Fallback to cloud during high load"
    ],
    successMetrics: [
      "50%+ cost reduction vs full-cloud",
      "Response quality comparable to GPT-3.5",
      "Average latency under 4 seconds",
      "System handles 10 concurrent interviews on single GPU"
    ],
    risks: [
      "Local infrastructure setup complexity",
      "GPU availability and costs",
      "Model quality may not match GPT-4",
      "Deployment complexity"
    ]
  },
  {
    id: "poc-5",
    title: "RAG-Powered Industry-Specific Interview System",
    duration: "3 days",
    complexity: "Medium",
    category: "Hybrid",
    description: "Build a RAG-based system with domain-specific knowledge for specialized industry interviews",
    objective: "Validate that RAG can provide domain expertise for technical interviews (e.g., healthcare, finance)",
    techStack: [
      "GPT-4 or Claude 3",
      "LangChain or LlamaIndex",
      "Vector DB (Pinecone/Weaviate/Chroma)",
      "Industry documentation corpus",
      "Next.js frontend"
    ],
    deliverables: [
      "RAG system with 100+ domain documents indexed",
      "Interview system for chosen industry (e.g., healthcare compliance)",
      "Accuracy comparison vs vanilla LLM",
      "Knowledge retrieval dashboard",
      "Domain expert evaluation report"
    ],
    keyFeatures: [
      "Industry-specific question generation",
      "Source citation for answers",
      "Knowledge base updating system",
      "Relevance scoring for retrieved docs"
    ],
    successMetrics: [
      "90%+ accuracy on domain-specific questions",
      "Expert evaluators rate quality 4/5+",
      "Retrieval latency under 1 second",
      "Clear source attribution for all answers"
    ],
    risks: [
      "Document preparation time-consuming",
      "RAG accuracy depends on corpus quality",
      "Vector DB costs at scale",
      "Hallucination still possible"
    ]
  },
  // === LOCAL/SELF-HOSTED POCs ===
  {
    id: "poc-6",
    title: "Fully Local Interview System (Llama 3 + XTTS + SadTalker)",
    duration: "3 days",
    complexity: "High",
    category: "Local",
    description: "Build a completely self-hosted interview system with local LLM, voice, and avatar generation",
    objective: "Prove feasibility of zero-cost-per-interview system for high-volume use cases",
    techStack: [
      "Llama 3 8B/70B quantized",
      "XTTS-v2 for voice",
      "SadTalker for avatar animation",
      "Stable Diffusion for avatar creation",
      "FastAPI + React",
      "Docker for deployment"
    ],
    deliverables: [
      "Docker-compose deployment package",
      "Full interview system with avatar",
      "Hardware requirements and setup guide",
      "Performance benchmarks on different GPU configs",
      "Quality comparison vs cloud solutions"
    ],
    keyFeatures: [
      "Complete data sovereignty",
      "No per-interview costs",
      "Customizable avatars",
      "Offline capability"
    ],
    successMetrics: [
      "System runs on 2x RTX 4090 setup",
      "Voice quality acceptable (3.5/5+)",
      "Avatar animation looks natural enough",
      "Handles 5+ concurrent interviews",
      "Total setup time under 8 hours"
    ],
    risks: [
      "High setup complexity",
      "Quality gap vs commercial solutions",
      "Significant hardware investment",
      "Maintenance overhead",
      "Limited avatar realism"
    ]
  },
  {
    id: "poc-7",
    title: "Fine-Tuned Phi-3 for Technical Screening",
    duration: "3 days",
    complexity: "Medium",
    category: "Local",
    description: "Fine-tune Phi-3 Medium on interview data to create a specialized screening model",
    objective: "Demonstrate that small fine-tuned models can match larger models for specific interview tasks",
    techStack: [
      "Phi-3 Medium 14B",
      "LoRA/QLoRA fine-tuning",
      "Custom interview dataset (500-1000 examples)",
      "Ollama or vLLM for inference",
      "Evaluation framework"
    ],
    deliverables: [
      "Fine-tuned Phi-3 model",
      "Training dataset and methodology",
      "Performance comparison vs base model and GPT-3.5",
      "Deployment guide",
      "Cost analysis and ROI calculation"
    ],
    keyFeatures: [
      "Specialized interview knowledge",
      "Faster inference than larger models",
      "Customized question style",
      "Lower operational costs"
    ],
    successMetrics: [
      "Match or exceed GPT-3.5 quality on interview tasks",
      "2x faster inference than Llama 3 70B",
      "Can run on single RTX 4070",
      "Training completes in under 6 hours"
    ],
    risks: [
      "Dataset preparation time",
      "Fine-tuning may not significantly improve quality",
      "Overfitting on training data",
      "Limited generalization to new interview types"
    ]
  },
  // === INTEGRATION/FEATURE POCs ===
  {
    id: "poc-8",
    title: "Multi-Modal Interview with Code Assessment",
    duration: "3 days",
    complexity: "Medium",
    category: "Integration",
    description: "Build interview system that can evaluate code submissions alongside conversation",
    objective: "Validate combined assessment approach for technical roles",
    techStack: [
      "GPT-4 with vision/code understanding",
      "Code execution sandbox (Judge0/Piston)",
      "Real-time code editor (Monaco/CodeMirror)",
      "Video chat interface",
      "ElevenLabs for voice"
    ],
    deliverables: [
      "Interview platform with integrated code editor",
      "Automated code evaluation system",
      "Real-time feedback mechanism",
      "Sample technical interview flow",
      "Candidate experience report"
    ],
    keyFeatures: [
      "Live coding environment",
      "Automated test case execution",
      "AI code review and hints",
      "Combined conversation + code scoring"
    ],
    successMetrics: [
      "Code execution works reliably",
      "AI provides helpful feedback on code",
      "Candidates complete coding tasks",
      "Combined score correlates with manual review"
    ],
    risks: [
      "Code sandbox security concerns",
      "Complex integration points",
      "Timing synchronization challenges",
      "Evaluation accuracy questions"
    ]
  },
  {
    id: "poc-9",
    title: "Emotion-Aware Interview System with Sentiment Analysis",
    duration: "2 days",
    complexity: "Low",
    category: "Integration",
    description: "Add emotion detection to adjust interview difficulty and tone in real-time",
    objective: "Test if emotion-aware interviews improve candidate experience and outcomes",
    techStack: [
      "GPT-4 for conversation",
      "Hume AI or similar for emotion detection",
      "ElevenLabs with emotion-controlled voices",
      "Web camera access for facial analysis",
      "Real-time analytics dashboard"
    ],
    deliverables: [
      "Interview system with emotion tracking",
      "Dynamic difficulty adjustment algorithm",
      "Emotional tone adaptation in responses",
      "A/B test framework",
      "Privacy-focused implementation guide"
    ],
    keyFeatures: [
      "Real-time emotion detection",
      "Adaptive question difficulty",
      "Empathetic voice responses",
      "Candidate stress monitoring"
    ],
    successMetrics: [
      "Emotion detection accuracy > 70%",
      "Candidates report better experience (survey)",
      "Lower dropout rates during interviews",
      "Maintains assessment validity"
    ],
    risks: [
      "Privacy concerns with facial analysis",
      "Emotion detection accuracy limitations",
      "May introduce bias",
      "Regulatory compliance questions"
    ]
  },
  {
    id: "poc-10",
    title: "VideoAsk-Style Async Interview Flow with AI Follow-ups",
    duration: "2 days",
    complexity: "Low",
    category: "Integration",
    description: "Create asynchronous video interview platform where AI generates follow-up questions",
    objective: "Combine convenience of async interviews with intelligence of AI-driven questioning",
    techStack: [
      "Video recording (WebRTC/MediaRecorder)",
      "GPT-4 for follow-up generation",
      "Speech-to-text (Whisper/Deepgram)",
      "Synthesia for question videos",
      "Next.js + storage (S3/Cloudflare)"
    ],
    deliverables: [
      "Async interview platform prototype",
      "AI follow-up generation system",
      "Candidate dashboard",
      "Reviewer evaluation interface",
      "Time-to-completion metrics"
    ],
    keyFeatures: [
      "Record at candidate's convenience",
      "AI analyzes responses and generates follow-ups",
      "Branching interview logic",
      "Bulk candidate processing"
    ],
    successMetrics: [
      "Candidates complete interviews within 24 hours",
      "Follow-up questions are relevant",
      "Reviewers save 50%+ time vs live interviews",
      "Quality matches synchronous interviews"
    ],
    risks: [
      "Video storage costs",
      "Transcription accuracy critical",
      "Delayed feedback may reduce engagement",
      "Cheating concerns without proctoring"
    ]
  }
];

export const categories = ["All", "Cloud-Based", "Hybrid", "Local", "Integration"] as const;
