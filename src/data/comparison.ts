export interface Service {
  name: string;
  tagline: string;
  icon: string;
  logo: string;
  color: string;
  pros: string[];
  cons: string[];
}

export interface ComparisonMetric {
  feature: string;
  elevenLabs: string;
  videoAsk: string;
  synthesia: string;
  akool: string;
}

export const services: Service[] = [
  {
    name: "ElevenLabs",
    tagline: "AI voice generation platform",
    icon: "🎙️",
    logo: "/logos/11labs.png",
    color: "blue",
    pros: [
      "Voice Quality: Industry-leading natural-sounding voices",
      "Emotion Control: Fine-grained control over emotional tone",
      "Multilingual: Supports 29+ languages for global reach",
      "Voice Cloning: Custom voice creation capabilities",
      "API-First: Robust API for seamless integration",
      "Real-time Capability: Low-latency generation for interactive use"
    ],
    cons: [
      "Pricing: Higher cost at scale compared to some alternatives",
      "No Visual Component: Voice-only, requires integration with other tools for avatars",
      "Resource Intensive: High-quality voices require more processing power",
      "Limited Contextual Awareness: May need additional systems for interview context",
      "Ethical Considerations: Voice cloning raises potential misuse concerns"
    ]
  },
  {
    name: "VideoAsk",
    tagline: "Interactive video engagement platform",
    icon: "📹",
    logo: "/logos/videoask.png",
    color: "green",
    pros: [
      "Asynchronous Interviews: Allows candidates to respond on their own time",
      "User-Friendly: Intuitive interface for both creators and respondents",
      "Branching Logic: Can create adaptive interview flows",
      "Analytics: Built-in response tracking and analysis",
      "Multi-format Responses: Supports text, audio, or video responses",
      "Integration Ready: Works with many existing workflow tools"
    ],
    cons: [
      "Limited AI Capabilities: Not primarily an AI platform, more of a video interaction tool",
      "Less Customization: Fewer options for deep personalization of the experience",
      "Not Real-time: Primarily designed for asynchronous communication",
      "Branding Limitations: Less control over the complete look and feel",
      "Not Specialized for Interviews: General-purpose tool adapted for interviews"
    ]
  },
  {
    name: "Synthesia",
    tagline: "AI video generation platform",
    icon: "👤",
    logo: "/logos/synthesia.png",
    color: "purple",
    pros: [
      "Full Avatar Creation: Realistic digital humans with synchronized speech",
      "No Recording Needed: Create professional videos without cameras/studios",
      "Template Library: Pre-made templates to speed up creation",
      "Multilingual: Supports 120+ languages and voices",
      "Enterprise Ready: SOC 2 compliance and enterprise security features",
      "Consistent Quality: Professional look across all generated content"
    ],
    cons: [
      "Limited Interactivity: Better for pre-recorded content than real-time interaction",
      "Avatar Selection: While diverse, still has a finite set of avatar options",
      "Customization Ceiling: Cannot fully customize every aspect of avatars",
      "Higher Cost: Significant investment for high-volume usage",
      "Rendering Time: Not optimized for immediate real-time responses",
      "Learning Curve: More complex to master than some alternatives"
    ]
  },
  {
    name: "Akool",
    tagline: "AI avatar and video generation platform",
    icon: "🤖",
    logo: "/logos/akool.png",
    color: "orange",
    pros: [
      "AI Avatar Creation: Specializes in creating realistic digital avatars",
      "OpenAPI Access: Provides API integration for developers",
      "Video Generation: Can create video content with AI avatars",
      "Customization Options: Allows personalization of avatar appearance",
      "Developer-Friendly: Built for integration into other applications",
      "Scalable: Designed for enterprise-level implementation",
      "Multimodal: Combines visual and audio elements"
    ],
    cons: [
      "Newer Platform: Less established than some competitors",
      "Market Presence: Smaller user base compared to leaders like Synthesia",
      "Feature Maturity: Some capabilities may still be evolving",
      "Documentation: May have less comprehensive resources for developers",
      "Specialized Use Cases: Primarily focused on avatar generation rather than full interview systems"
    ]
  }
];

export const comparisonMetrics: ComparisonMetric[] = [
  {
    feature: "Core Strength",
    elevenLabs: "Voice generation",
    videoAsk: "Video interactions",
    synthesia: "Video creation",
    akool: "AI avatars"
  },
  {
    feature: "Visual Component",
    elevenLabs: "None",
    videoAsk: "Human-recorded",
    synthesia: "AI-generated",
    akool: "AI-generated"
  },
  {
    feature: "Voice Quality",
    elevenLabs: "Excellent",
    videoAsk: "Depends on recording",
    synthesia: "Very Good",
    akool: "Good"
  },
  {
    feature: "API Accessibility",
    elevenLabs: "High",
    videoAsk: "Medium",
    synthesia: "Medium",
    akool: "High"
  },
  {
    feature: "Developer Focus",
    elevenLabs: "Yes",
    videoAsk: "Partial",
    synthesia: "Partial",
    akool: "Yes"
  },
  {
    feature: "Interview-Specific",
    elevenLabs: "No",
    videoAsk: "Yes",
    synthesia: "No",
    akool: "No"
  },
  {
    feature: "Integration Ease",
    elevenLabs: "Medium",
    videoAsk: "Medium",
    synthesia: "Medium",
    akool: "Medium-High"
  },
  {
    feature: "Customization",
    elevenLabs: "High (voice only)",
    videoAsk: "Medium",
    synthesia: "Medium-High",
    akool: "High (avatars)"
  }
];

export const strategicConsiderations = [
  {
    title: "ElevenLabs",
    description: "Could provide the voice layer for your custom avatars"
  },
  {
    title: "VideoAsk",
    description: "Might serve as inspiration for the interview flow but may not offer enough AI capabilities"
  },
  {
    title: "Synthesia",
    description: "Could be useful for creating pre-recorded interviewer questions but may lack the real-time interaction needed"
  },
  {
    title: "Akool",
    description: "Could serve as your avatar generation layer, providing the 'face' of your interview system with developer-friendly API access"
  }
];

export const hybridApproach = [
  "Use Akool API for avatar visual generation to create the 'face' of your interview system",
  "Pair Akool avatars with ElevenLabs voices for high-quality voice synthesis",
  "Implement custom interview logic for question generation and response analysis",
  "Build real-time rendering pipeline for interactive interviews",
  "Consider VideoAsk's flow system as inspiration for adaptive interview paths"
];

export const akoolIntegration = {
  title: "Akool Integration Strategy",
  architecture: "User Interface → Interview Controller → Question Generator → Akool API (Avatar) + ElevenLabs API (Voice) → Response Analysis → Feedback Engine",
  considerations: [
    "API Limits: Understand rate limits and pricing at scale",
    "Rendering Speed: Test latency for real-time interview scenarios",
    "Integration Complexity: Assess developer resources needed",
    "Customization Depth: Determine if avatar customization meets your needs",
    "Long-term Roadmap: Align with Akool's development direction"
  ],
  potentialApplications: [
    "Custom Interviewers: Create diverse avatar interviewers representing different industries",
    "API Integration: Directly incorporate avatar generation into your interview platform",
    "Consistent Branding: Maintain visual consistency across your application",
    "Scalable Solution: Generate avatars on-demand for different interview scenarios"
  ]
};
