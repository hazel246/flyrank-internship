# Prompt Ladder Assignment

## Track: Backend AI Engineer

---

# Introduction

The purpose of this assignment was to understand how small changes in prompts can improve AI responses. I started with a basic backend development prompt and improved it step by step by adding one layer at a time.

After each version, I compared the output and noted what improved and what problems remained.

The task chosen was building an AI chatbot backend because it is related to backend AI engineering and includes concepts such as APIs, databases, embeddings, and Retrieval-Augmented Generation (RAG).

---

# Baseline Prompt

## Prompt

```
Build a backend for an AI chatbot.
```

## Output Summary

The AI gave a general explanation of how an AI chatbot backend could be structured.

It suggested:

- API layer
- Business logic layer
- AI provider integration
- Data models

It also provided a basic FastAPI project structure, API routes, services, and OpenAI integration.

## Analysis

### What changed in the prompt?

Nothing. This was the starting prompt.

### What improved in the output?

The AI provided a basic backend architecture and example code for creating a simple chatbot API.

### What still failed?

The response was too general. It did not explain what type of chatbot was being built, what data it would use, or what features were required.

### What would I try next?

I would add a clearer goal by specifying the framework and type of backend needed.

---

# Version 1

## Layer Added

**Clear Goal**

## Prompt

```
Build a FastAPI backend for an AI chatbot.
```

## Output Summary

The AI created a FastAPI backend with:

- Project structure
- API routes
- Service layer
- Configuration management
- OpenAI integration
- Request and response models

The architecture separated:

- Routes
- Services
- Models
- Configuration

## Analysis

### What changed in the prompt?

I specified that the backend should use FastAPI.

### What improved in the output?

The response became more focused. Instead of discussing different backend options, it directly created a Python FastAPI solution.

It also included a cleaner backend structure with separate files for different responsibilities.

### What still failed?

The chatbot was still a simple question and answer system.

It did not include:

- Document processing
- Retrieval system
- Vector database
- Knowledge storage

### What would I try next?

I would add more context about the purpose of the chatbot.

---

# Version 2

## Layer Added

**Context**

## Prompt

```
Build a FastAPI backend for an AI chatbot that answers questions from uploaded PDF documents using Retrieval-Augmented Generation (RAG).
```

## Output Summary

The AI changed the design into a RAG chatbot system.

It included:

- PDF upload
- Text extraction
- Text chunking
- Embedding generation
- Vector database storage
- Similarity search
- LLM response generation

The architecture became:

```
User
 |
FastAPI
 |
PDF Processing
 |
Embeddings
 |
Vector Database
 |
LLM
 |
Answer
```

## Analysis

### What changed in the prompt?

I explained what the chatbot should do. It needed to answer questions from uploaded PDF documents using RAG.

### What improved in the output?

The AI understood that this was not a normal chatbot.

It created a complete RAG workflow with:

- Document processing
- Embeddings
- Vector search
- LLM generation

The answer became closer to a real AI application architecture.

### What still failed?

The response was mostly architectural.

It explained the system but did not provide enough implementation details.

### What would I try next?

I would specify the format I want the answer in, such as folder structure, APIs, and code.

---

# Version 3

## Layer Added

**Specified Output Format**

## Prompt

```
Build a FastAPI backend for an AI chatbot that answers questions from uploaded PDF documents using Retrieval-Augmented Generation (RAG).

Return:

1. Project architecture
2. Folder structure
3. API endpoints
4. Request/Response examples
5. Python code
```

## Output Summary

The AI provided:

- Complete architecture diagram
- Backend folder structure
- Upload and chat endpoints
- Request and response examples
- FastAPI implementation code

It also explained the responsibility of each service.

## Analysis

### What changed in the prompt?

I specified exactly how I wanted the answer to be structured.

### What improved in the output?

The response became much easier to understand and use.

Instead of receiving a general explanation, I received separate sections for:

- Architecture
- APIs
- Implementation

The code examples also made the design easier to translate into an actual project.

### What still failed?

The AI selected some technologies by itself, such as ChromaDB and Sentence Transformers.

These choices were not necessarily the ones I wanted for a production system.

It also missed some backend practices like:

- Authentication
- Better database design
- Production deployment details

### What would I try next?

I would add constraints to control the technology choices.

---

# Version 4

## Layer Added

**Constraints**

## Prompt

```
Build a FastAPI backend for an AI chatbot that answers questions from uploaded PDF documents using Retrieval-Augmented Generation (RAG).

Use:

- Python
- FastAPI
- PostgreSQL
- pgvector
- OpenAI Embeddings
- GPT-4.1

Return:

1. Folder structure
2. API endpoints
3. Code
```

## Output Summary

The AI created a backend using:

- FastAPI
- PostgreSQL
- pgvector
- OpenAI embeddings
- GPT-4.1

It included:

- Database models
- SQLAlchemy setup
- Vector search
- Upload endpoint
- Chat endpoint
- RAG workflow

## Analysis

### What changed in the prompt?

I restricted the technologies that should be used.

### What improved in the output?

The AI stopped choosing its own tools and followed the requested technology stack.

The architecture became closer to a real production AI backend because it included PostgreSQL and pgvector instead of only using a simple local vector database.

### What still failed?

The response still missed some production requirements:

- Dependency injection
- Authentication
- Logging
- Database migrations
- Docker setup

### What would I try next?

I would add quality requirements to make the output more production-ready.

---

# Version 5

## Layer Added

**Quality Criteria**

## Prompt

```
Build a FastAPI backend for an AI chatbot that answers questions from uploaded PDF documents using Retrieval-Augmented Generation (RAG).

Use:

- Python
- FastAPI
- PostgreSQL
- pgvector
- OpenAI Embeddings
- GPT-4.1

Return:

1. Folder structure
2. API endpoints
3. Complete code

Quality requirements:

- Follow REST API best practices.
- Use dependency injection.
- Include proper error handling.
- Write production-quality code.
```

## Output Summary

The AI explained that a complete production-level RAG backend would be too large for one response.

Instead, it suggested dividing the implementation into multiple parts:

- Architecture and setup
- PDF processing
- Embeddings and vector storage
- Retrieval and LLM integration
- Deployment and production features

## Analysis

### What changed in the prompt?

I added quality requirements for production-level backend development.

### What improved in the output?

The AI showed better awareness of real software engineering practices.

Instead of generating incomplete code, it suggested breaking the project into smaller parts to maintain quality.

### What still failed?

The complete code was not generated because the request became too large for one response.

This showed that adding more requirements does not always improve the final output.

Sometimes the task becomes too large and needs to be divided into smaller tasks.

### What would I try next?

I would split the project into smaller prompts and ask the AI to generate one module at a time.

---

# Final Reusable Prompt

```
Design a production-ready FastAPI backend for an AI chatbot that answers questions from uploaded PDF documents using Retrieval-Augmented Generation (RAG).

Technology stack:

- Python
- FastAPI
- PostgreSQL with pgvector
- OpenAI Embeddings
- GPT-4.1

Provide:

1. System architecture
2. Folder structure
3. Database schema
4. API endpoints
5. Request and response examples
6. Implementation code
7. Error handling strategy
8. Deployment approach

Requirements:

- Follow REST API best practices.
- Use clean backend architecture.
- Separate routes, services, and database logic.
- Include validation and error handling.
- Write maintainable production-quality code.
```

---

# Conclusion

This prompt ladder showed that adding more information gradually improved the AI output.

The biggest improvements came from adding:

- Context
- Output format
- Technical constraints

However, adding too many requirements at once can make the task too large. Complex backend projects should be divided into smaller steps.

The final prompt is more useful because another backend engineer could use it and understand exactly what type of system needs to be created.
