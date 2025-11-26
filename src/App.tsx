import { useState } from 'react'
import './App.css'

interface FileItem {
  name: string
  path: string
  type: string
  iconUrl: string
  tags: string[]
}

function App() {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null)

  const files: FileItem[] = [
    { name: 'Spring Boot REST API', path: '/files/ASSIGNMENT 1.pdf', type: 'Building RESTful web services with Spring Boot, MySQL database integration, and testing CRUD operations with Bruno API client.', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg', tags: ['Spring Boot', 'MySQL', 'JPA', 'REST'] },
    { name: 'AWS Cloud Setup', path: '/files/ASSIGNMENT 2.pdf', type: 'Complete guide for AWS account setup and website hosting using EC2 virtual servers, S3 storage, and RDS database services.', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', tags: ['AWS', 'EC2', 'S3', 'RDS'] },
    { name: 'Docker & Flask App', path: '/files/ASSIGNMENT 3.pdf', type: 'Docker Desktop installation, container basics, and deploying a Flask web application with Dockerfile configuration.', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', tags: ['Docker', 'Python', 'Flask'] },
    { name: 'Virtualization Analysis', path: '/files/ASSIGNMENT 4.pdf', type: 'Performance comparison of virtualization vs containerization for Edge Computing with Docker Compose and Kubernetes orchestration.', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/podman/podman-original.svg', tags: ['Docker', 'Podman', 'Kubernetes'] },
    { name: 'Kubernetes with Minikube', path: '/files/ASSIGNMENT 5.pdf', type: 'Local Kubernetes cluster setup using Minikube, creating Deployments and Services, managing Pods, and monitoring with metrics-server.', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg', tags: ['Minikube', 'kubectl', 'Pods'] },
    { name: 'Docker Image Lab Activity', path: '/files/LAB DOCKER IMAGE.pdf', type: 'Hands-on lab for building, managing, and deploying Docker container images with practical exercises.', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', tags: ['Docker', 'Images', 'Lab'] },
  ]

  const handleViewFile = (file: FileItem) => {
    setSelectedFile(file)
  }

  const handleCloseModal = () => {
    setSelectedFile(null)
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <div className="brand-info">
              <span className="brand-title">Elective 3</span>
              <span className="brand-subtitle">FINALS COMPILATION</span>
            </div>
          </div>
          <div className="nav-right">
            <span className="nav-text active">Documents</span>
            <span className="nav-text">Finals 2025</span>
          </div>
        </div>
      </nav>
      
      <div className="app-container">
        <header className="header">
          <div className="header-content">
            <div className="student-info">
              <h1 className="student-name">David Christian C. Olimberio</h1>
              <div className="course-info">
                <span className="course-code">IV - ACSAD</span>
                <span className="divider">•</span>
                <span className="course-title">ELEC 3 Compilation</span>
              </div>
            </div>
          </div>
          <div className="intro-section">
            <p className="intro-text">
              This compilation showcases hands-on projects and technical documentation exploring modern cloud computing technologies. 
              From building RESTful APIs with Spring Boot to orchestrating containers with Kubernetes, each assignment demonstrates 
              practical implementations of industry-standard DevOps tools and cloud infrastructure solutions.
            </p>
          </div>
        </header>

        <div className="files-grid">
          {files.map((file, index) => (
            <div key={index} className="file-card" onClick={() => handleViewFile(file)}>
              <div className="card-header">
                <img src={file.iconUrl} alt={file.name} className="file-icon" />
                <span className="assignment-badge">ASSIGNMENT #{index + 1}</span>
              </div>
              <div className="file-info">
                <h3 className="file-name">{file.name}</h3>
                <p className="file-type">{file.type}</p>
              </div>
              <div className="tags">
                {file.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              <button className="view-btn">
                <span className="eye-icon">👁</span> View Document
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedFile && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedFile.name}</h2>
              <button className="close-btn" onClick={handleCloseModal}>✕</button>
            </div>
            <div className="pdf-viewer">
              <iframe
                src={selectedFile.path}
                title={selectedFile.name}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
