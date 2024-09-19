// 'use client';
// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// interface Job {
//   id: number;
//   name: string;
//   status: string;
//   started_at: string;
//   finished_at: string;
// }

// interface Stage {
//   id: number;
//   name: string;
//   position: number;
//   jobs: Job[];
// }

// interface Pipeline {
//   id: number;
//   name: string;
//   status: string;
//   stages: Stage[];
// }

// interface PipelineVisualizerProps {
//   pipeline: Pipeline;
// }

// const PipelineVisualizer: React.FC<PipelineVisualizerProps> = ({ pipeline }) => {
//   const d3Container = useRef<SVGSVGElement | null>(null);

//   useEffect(() => {
//     if (pipeline && d3Container.current) {
//       // Clear any existing content
//       d3.select(d3Container.current).selectAll('*').remove();

//       // Set dimensions and margins
//       const margin = { top: 20, right: 90, bottom: 30, left: 90 };
//       const width = 960 - margin.left - margin.right;
//       const height = 600 - margin.top - margin.bottom;

//       // Append the svg object to the container
//       const svg = d3
//         .select(d3Container.current)
//         .attr('width', width + margin.left + margin.right)
//         .attr('height', height + margin.top + margin.bottom)
//         .append('g')
//         .attr('transform', `translate(${margin.left},${margin.top})`);

//       // Add zoom functionality
//       const zoom = d3.zoom().scaleExtent([0.1, 2]).on('zoom', (event) => {
//         svg.attr('transform', event.transform);
//       });

//       d3.select(d3Container.current).call(zoom);

//       // Create the hierarchical data structure
//       const root = d3.hierarchy(transformData(pipeline));

//       // Create the tree layout
//       const treeLayout = d3.tree().size([height, width]);

//       // Assign the layout to the root
//       treeLayout(root);

//       // Add links between nodes
//       svg
//         .selectAll('.link')
//         .data(root.links())
//         .enter()
//         .append('path')
//         .attr('class', 'link')
//         .attr('d', d3.linkHorizontal()
//           .x((d: any) => d.y)
//           .y((d: any) => d.x)
//         )
//         .attr('fill', 'none')
//         .attr('stroke', '#ccc')
//         .attr('stroke-width', 2);

//       // Add nodes
//       const node = svg
//         .selectAll('.node')
//         .data(root.descendants())
//         .enter()
//         .append('g')
//         .attr('class', (d) => 'node' + (d.children ? ' node--internal' : ' node--leaf'))
//         .attr('transform', (d) => `translate(${d.y},${d.x})`);

//       // Add circles to nodes
//       node
//         .append('circle')
//         .attr('r', 10)
//         .attr('fill', (d: any) => colorStatus(d.data.status))
//         .attr('stroke', 'steelblue')
//         .attr('stroke-width', 3)
//         .on('click', function (event, d) {
//           // Toggle children on click
//           if (d.children) {
//             d._children = d.children;
//             d.children = null;
//           } else {
//             d.children = d._children;
//             d._children = null;
//           }
//           // Re-render the tree
//           // Note: To re-render, you might need to trigger state changes or use D3's update pattern
//         });

//       // Add labels to nodes
//       node
//         .append('text')
//         .attr('dy', '.35em')
//         .attr('x', (d: any) => (d.children ? -13 : 13))
//         .attr('text-anchor', (d: any) => (d.children ? 'end' : 'start'))
//         .text((d: any) => d.data.name);
//     }
//   }, [pipeline]);

//   // Helper functions remain the same
//   const transformData = (pipeline: Pipeline) => {
//     return {
//       name: pipeline.name,
//       status: pipeline.status,
//       children: pipeline.stages.map((stage) => ({
//         name: stage.name,
//         status: stage.status,
//         children: stage.jobs.map((job) => ({
//           name: job.name,
//           status: job.status,
//         })),
//       })),
//     };
//   };

//   const colorStatus = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'success':
//         return 'green';
//       case 'failed':
//         return 'red';
//       case 'running':
//         return 'orange';
//       default:
//         return 'gray';
//     }
//   };

//   return (
//     <div>
//       <svg ref={d3Container}></svg>
//     </div>
//   );
// };

// export default PipelineVisualizer;


import React from 'react'

export default function PipelineVisualizer() {
  return (
    <div>
      Visualizer
    </div>
  )
}

