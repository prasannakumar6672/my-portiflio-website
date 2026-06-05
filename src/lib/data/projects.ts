import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "neurax-hackathon",
        title: "NeuraX Hackathon Website",
        tagline: "Modern hackathon event website with animated UI and responsive design",
        description: "A modern hackathon event website featuring a stunning animated UI with Framer Motion transitions, fully responsive design, and an engaging experience for participants and organizers alike.",
        image: "/images/neurax_hackthon website.png",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/prasannakumar6672/Neurax2.0-Hackthon-Website",
        liveUrl: "https://neurax2-0.vercel.app",
        features: [
            "Modern animated UI with Framer Motion",
            "Fully responsive design",
            "Event timeline and schedule",
            "Participant registration integration",
            "Interactive FAQ and info sections"
        ],
        problemStatement: "Hackathons need highly engaging, informative, and visually spectacular websites to attract top talent and maintain sponsor interest, but generic event registration templates fail to inspire tech students.",
        solution: "Built a fully customized, ultra-premium event portal for the NeuraX Hackathon, leveraging motion designs and interactive timelines to represent the brand's scientific, futuristic identity.",
        architecture: "Created with Next.js and Tailwind CSS. The motion layout is powered by Framer Motion, presenting animated timeline components, collapsible FAQ menus, and an integrated registrations endpoint.",
        challenges: "Ensuring high-end, complex Framer Motion transitions run at a buttery-smooth 60fps on low-powered mobile browsers. Solved by offloading transforms to GPU layers and implementing lazy rendering for below-the-fold assets.",
        futureScope: "Developing an integrated dashboard inside the website that allows live event check-ins, team matchmaking, and peer-to-peer submission review."
    },
    {
        id: "road-damage-detection",
        title: "AI Road Damage Detection & Civic Reporting",
        tagline: "Smart city platform that detects road damage and allows citizens to report civic issues",
        description: "A smart city platform powered by AI vision that automatically detects road damage from images and enables citizens to report civic issues. Features a comprehensive reporting dashboard for municipal authorities to prioritize repairs.",
        image: "/images/ai road damage and civic complaint system.jpeg",
        tech: ["Next.js", "Node.js", "AI Vision"],
        githubUrl: "https://github.com/prasannakumar6672/AI-Road-Damage-Civic-Complaint-System",
        liveUrl: "https://ai-road-damage-civic-complaint-syst.vercel.app/",
        features: [
            "AI-powered road damage identification",
            "Citizen reporting interface",
            "Municipal authority dashboard",
            "Automated triage and prioritization",
            "Real-time status tracking for reports"
        ],
        problemStatement: "Potholes and structural road damage lead to high vehicle repair costs and accidents. Manual surveying by city maintenance departments is slow, expensive, and reactive, relying on user complaints that are often poorly categorized.",
        solution: "A complete smart-city reporting system that automates damage classification using an AI vision engine on citizen-submitted photographs, automatically mapping GPS locations and scheduling repairs based on severity.",
        architecture: "Next.js frontend connects to an Express.js backend. User image uploads are piped to an AI vision inference engine. Damage locations, types (alligator cracking, deep potholes), and severity indexes are mapped in real-time.",
        challenges: "Determining physical dimensions and severity score of road damage using single 2D photos without scale reference. Solved by calibrating aspect ratios using standard lane width guidelines and temporal degradation models.",
        futureScope: "Deploying the vision models on dashcams of municipal garbage trucks or public buses to map the entire city's road network automatically every week."
    },
    {
        id: "water-body-encroachment",
        title: "AI Water Body Detection & Monitoring",
        tagline: "Geospatial computer vision system monitoring water bodies and boundary changes using satellite imagery",
        description: "A role-based AI geospatial system for monitoring water bodies and boundary changes with interactive dashboards. Uses computer vision and satellite imagery analysis to track changes near water bodies, enabling authorities to take timely action.",
        image: "/images/water bodies encroachment detection system.png",
        tech: ["Python", "OpenCV", "ML", "Web Dashboard"],
        githubUrl: "https://github.com/prasannakumar6672/water_Bodies_Encroachment_Detection",
        liveUrl: "https://water-bodies-encroachment-detection.vercel.app/",
        features: [
            "Satellite imagery analysis with OpenCV",
            "Real-time boundary monitoring",
            "Role-based access control (Public, Officer, Admin)",
            "Interactive geospatial dashboard",
            "Historical deployment monitoring"
        ],
        problemStatement: "Monitoring changes and developments near local water bodies is critical to prevent environmental risks, urban flooding, and ecological degradation. Municipal authorities lack real-time scalable tools to monitor vast areas automatically.",
        solution: "Developed a computer vision system that monitors satellite and aerial imagery, applying custom object-detection and segmentation pipelines to automatically isolate water boundaries and issue alerts.",
        architecture: "The system uses Python/OpenCV and deep learning models to ingest geospatial satellite feeds. Detected discrepancies are written to a database and served on a role-based dashboard built with Next.js, displaying geofenced construction alerts.",
        challenges: "Varying atmospheric conditions, clouds, and shadow distortions in low-resolution satellite images caused false positives in early iterations. Resolved by incorporating historical temporal image comparisons and adaptive color thresholding.",
        futureScope: "Integrating high-resolution SAR (Synthetic Aperture Radar) data for day-and-night all-weather tracking, and automating notice dispatch to local municipal divisions."
    },
    {
        id: "ai-rag-chatbot",
        title: "AI Chatbot with Retrieval Augmented Generation",
        tagline: "AI assistant that answers questions using document retrieval and LLM reasoning",
        description: "An intelligent AI assistant that leverages Retrieval Augmented Generation (RAG) to answer questions by combining document retrieval with large language model reasoning. Users can query custom knowledge bases built from their own documents for accurate, context-aware responses.",
        image: "",
        tech: ["Python", "LangChain", "Vector DB", "LLM"],
        githubUrl: "https://github.com/prasannakumar6672",
        features: [
            "Multi-document knowledge retrieval",
            "Context-aware LLM reasoning",
            "Vector database integration",
            "Custom knowledge base uploading",
            "Streaming response interface"
        ],
        problemStatement: "Generic LLMs frequently hallucinate and lack access to proprietary user documents or real-time local knowledge bases, rendering them ineffective for specialized company search tools or personal research assistants.",
        solution: "A Retrieval-Augmented Generation (RAG) assistant that indexes local document formats (PDFs, docs, text), converts text chunks into vector embeddings, and uses semantic search to augment the prompt context before feeding it to LLMs.",
        architecture: "Built with LangChain and Python, using vector storage (ChromaDB/Pinecone) to index document embeddings. Semantic searches pull relevant context chunks, and the resulting prompt is orchestrated through custom LLM chains.",
        challenges: "Context pollution, where retrieved documents contain irrelevant text that degrades output quality. Solved by implementing dynamic ranking (Reranking) using cross-encoders and metadata pre-filtering.",
        futureScope: "Adding agentic reasoning loops that let the chatbot run SQL queries, execute web search lookups, and summarize long-term conversational memory profiles."
    },
];
