'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import PipelineVisualizer from '@/app/_components/pipeline/PipelineVisualizer';

interface Job {
  id: number;
  name: string;
  status: string;
  started_at: string;
  finished_at: string;
}

interface Stage {
  id: number;
  name: string;
  position: number;
  jobs: Job[];
}

interface Pipeline {
  id: number;
  name: string;
  status: string;
  stages: Stage[];
}


export default function page() {
  const { signOut } = useAuth();
  const [pipelines, setPipelines] = useState<Pipeline[]>([]);
  const [selectedPipeline, setSelectedPipeline] = useState<Pipeline | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error: any) {
      console.error('Error signing out:', error.message);
    } 
  };

  return (
    <header className="header">
      <h2>CI/CD Pipeline Visualization Tool</h2>
      <button onClick={handleSignOut}>
        Sign out
      </button>
      
      {pipelines.length === 0 ? (
        <p>No pipelines found. Create one!</p>
      ) : (
        <div>
          <label htmlFor="pipeline-select">Select Pipeline:</label>
          <select
            id="pipeline-select"
            value={selectedPipeline?.id}
            onChange={(e) =>
              setSelectedPipeline(
                pipelines.find((p) => p.id === parseInt(e.target.value)) || null
              )
            }
          >
            {pipelines.map((pipeline) => (
              <option key={pipeline.id} value={pipeline.id}>
                {pipeline.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedPipeline && <PipelineVisualizer pipeline={selectedPipeline} />}
    </header>
  );
}
