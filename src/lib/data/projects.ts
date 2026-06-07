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
        title: "AI-Powered Road Damage Detection & Smart Civic Complaint System",
        tagline: "Smart city platform that detects road damage and allows citizens to report civic issues",
        description: "A full-stack complaint management system featuring role-based JWT authentication, automated road damage detection using the Roboflow pretrained API, a RESTful backend with MongoDB, and a secure image upload pipeline using Multer and Cloudinary.",
        image: "/images/ai road damage and civic complaint system.jpeg",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Multer", "Cloudinary", "Roboflow API"],
        githubUrl: "https://github.com/prasannakumar6672/AI-Road-Damage-Civic-Complaint-System",
        liveUrl: "https://ai-road-damage-civic-complaint-syst.vercel.app/",
        features: [
            "Built full-stack complaint management system with role-based JWT authentication (Citizen & Officials)",
            "Integrated Roboflow pretrained API to detect potholes, cracks, and erosion with severity scoring",
            "Designed RESTful backend architecture with MongoDB schema and complaint lifecycle tracking",
            "Developed secure image upload pipeline using Multer and Cloudinary cloud storage"
        ],
        problemStatement: "Municipal road maintenance is often reactive, relying on manual reports that lack categorization and visual proof, leading to delays in repairs.",
        solution: "Built a full-stack system with role-based JWT authentication and Roboflow API integration to automatically identify and score road damage severity, streamlining reporting and verification.",
        architecture: "React.js and Node.js/Express.js backend with MongoDB storage. Images are processed via the Roboflow vision model, and files are securely stored on Cloudinary.",
        challenges: "Ensuring secure role-based access control and high-performance image uploads while handling automated inference pipelines. Solved using JWT middleware and optimized Multer streaming to Cloudinary.",
        futureScope: "Integrating real-time mapping of complaints via Google Maps API and scheduling automated maintenance routes for city workers."
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
    {
        id: "vital-agent",
        title: "Vital Agent — AI Health Risk Prediction System",
        tagline: "AI-based health monitoring and personalized risk prediction system",
        description: "An intelligent healthcare platform that predicts patient health risks by running TensorFlow LSTM models on sequential vitals data. Integrates Gemini API for personalized health advice and threshold-based alerts.",
        image: "",
        tech: ["Python", "TensorFlow (LSTM)", "REST APIs", "Gemini API"],
        githubUrl: "https://github.com/prasannakumar6672",
        features: [
            "Developed AI-based health risk prediction system using TensorFlow LSTM on 7-day sequential vitals data",
            "Generated probabilistic risk scores (0-1) and integrated trained model (.h5) into backend for real-time inference",
            "Implemented threshold-based alert mechanism and Gemini API integration for personalized health recommendations"
        ],
        problemStatement: "Monitoring dynamic patient vitals and identifying critical deterioration risks early requires continuous analysis of complex temporal sequences, which standard thresholds fail to do effectively.",
        solution: "Built a sequential prediction engine utilizing TensorFlow LSTM to generate probabilistic health risk scores from 7-day vitals, combined with Gemini API for automated, custom health recommendations.",
        architecture: "A Python-based backend that handles sequential vitals analysis, serving inference through REST APIs, and utilizing the Gemini API to format personalized risk mitigating actions.",
        challenges: "Maintaining low-latency inference on LSTM models and generating reliable recommendations based on highly variable patient metrics. Solved by calibrating threshold alerts and structuring prompt templates for Gemini.",
        futureScope: "Integrating real-time wearables synchronization (such as Fitbit or Apple Watch) to enable continuous background risk evaluation."
    },
    {
        id: "preptrack",
        title: "PrepTrack — Job Interview & Exam Preparation Tracker",
        tagline: "Intelligent study planner and interview prep dashboard",
        description: "A comprehensive preparation tracking application featuring customizable study templates, progress monitoring dashboards, mock interview performance analytics, and dynamic question banks.",
        image: "",
        tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS"],
        githubUrl: "https://github.com/prasannakumar6672",
        features: [
            "Customizable study schedule planner with dynamic milestone tracking",
            "Interactive mock interview session logger with analytical feedback dashboards",
            "Structured question bank system with spaced repetition flags",
            "Dynamic progress charts visualizing category performance"
        ],
        problemStatement: "Candidates preparing for technical interviews lack a single structured workspace to plan schedules, track review retention, analyze mock performance, and organize customized question banks.",
        solution: "Designed a high-performance preparation hub, PrepTrack, featuring spaced repetition tracking, progress visualizations, and analytics logs to keep candidates structured and motivated.",
        architecture: "Next.js frontend with Tailwind CSS layout, Express/Node.js backend endpoints, and MongoDB database storage representing prep milestones and question lists.",
        challenges: "Orchestrating spaced repetition scheduling logic and rendering responsive progress calendars. Solved by building lightweight custom interval algorithms and mapping data through canvas-based charting.",
        futureScope: "Integrating OpenAI mock audio interview evaluations and automatic code execution sandboxes."
    },
];
