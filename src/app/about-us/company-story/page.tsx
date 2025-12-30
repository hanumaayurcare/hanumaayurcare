'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import ReactFlow, {
  Node,
  Edge,
  ConnectionLineType,
  EdgeTypes,
  getBezierPath,
  EdgeProps,
} from 'react-flow-renderer';

// Milestone data
const milestones = [
  {
    id: '1',
    date: '1995',
    title: 'Founded in Kerala',
    description: 'Founded as a small Ayurvedic pharmacy in Kerala.',
  },
  {
    id: '2',
    date: '2005',
    title: 'First GMP Certification',
    description: 'First GMP certification achieved.',
  },
  {
    id: '3',
    date: '2012',
    title: 'National Expansion',
    description: 'Expanded to national distribution.',
  },
  {
    id: '4',
    date: '2020',
    title: 'International Expansion',
    description: 'Began expanding internationally.',
  },
];

// Custom edge with button
const ButtonEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
}) => {
  const [edgePath, labelXStr, labelYStr] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  
  const labelX = Number(labelXStr);
  const labelY = Number(labelYStr);
  

  const handleClick = useCallback(() => {
    alert(`Edge ${id} clicked! 🎉`);
  }, [id]);

  return (
    <>
      <path
        id={id}
        d={edgePath}
        className="react-flow__edge-path"
        markerEnd={markerEnd}
        style={{ stroke: '#6366f1', strokeWidth: 2 }}
      />
      <foreignObject width={40} height={40} x={labelX - 20} y={labelY - 20}>
        <div
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
          className="w-10 h-10 flex items-center justify-center bg-amber-500 rounded-full text-white text-xs cursor-pointer shadow-lg hover:bg-amber-600 transition"
        >
          ⚡
        </div>
      </foreignObject>
    </>
  );
};

const edgeTypes: EdgeTypes = {
  buttonedge: ButtonEdge,
};

// Styling for milestone nodes
const nodeStyle = {
  background: '#f8fafc',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  width: 220,
};

// Nodes from milestones
const initialNodes: Node[] = milestones.map((milestone, index) => ({
  id: milestone.id,
  type: 'default',
  data: {
    label: (
      <div className="p-2">
        <p className="font-bold text-gray-800">{milestone.date}</p>
        <p className="text-sm text-amber-700">{milestone.title}</p>
        <p className="text-xs text-gray-500">{milestone.description}</p>
      </div>
    ),
  },
  position: { x: 300, y: 100 + index * 180 },
  style: nodeStyle,
}));

// Edges connecting milestones
const initialEdges: Edge[] = milestones.slice(0, -1).map((_, index) => ({
  id: `e${milestones[index].id}-${milestones[index + 1].id}`,
  source: milestones[index].id,
  target: milestones[index + 1].id,
  type: 'buttonedge',
}));

// Main component
const CompanyStory = () => {
  const [nodes] = useState<Node[]>(initialNodes);
  const [edges] = useState<Edge[]>(initialEdges);

  return (
    <div className="bg-white">
      {/* Hero */}
        <div className="relative h-[32rem] bg-gradient-to-br from-amber-100 via-lime-100 to-white overflow-hidden">
          <Image
            src="/images/about-history.jpg"
            alt="Our History"
            fill
            priority
            className="object-cover opacity-60"
          />

          {/* Optional: Soft Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('/images/leaf-pattern.svg')] bg-repeat opacity-10 pointer-events-none"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-amber-900 sm:text-6xl mb-4 drop-shadow-md">
                Our Story
              </h1>
              <p className="text-xl sm:text-2xl text-emerald-800 leading-relaxed drop-shadow-sm">
                From humble beginnings to becoming a trusted name in Ayurvedic wellness
              </p>

              {/* 🌿 Optional Call to Action */}
              <div className="mt-6">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
                  Discover Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>


      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-700">
          <h2 className="text-amber-600">Our Humble Beginnings</h2>
          <p>
            Founded in 1995 by Dr. Rajesh Verma, our company began as a small pharmacy in Kerala,
            preparing traditional Ayurvedic formulations using time-honored methods passed down through generations.
          </p>

          <h2 className="text-amber-600">Our Vision</h2>
          <p>
            To make authentic Ayurvedic wellness accessible worldwide while maintaining the highest standards
            of purity, efficacy, and traditional wisdom.
          </p>

          <h2 className="text-amber-600">Our Mission</h2>
          <ul>
            <li>Preserving ancient Ayurvedic knowledge while incorporating modern quality standards.</li>
            <li>Sourcing ingredients ethically and sustainably.</li>
            <li>Providing education about genuine Ayurvedic practices.</li>
            <li>Developing innovative products that meet modern needs while staying true to tradition.</li>
          </ul>

          {/* Milestones Timeline */}
          <div className="my-16">
            <h3 className="text-amber-700 text-2xl mb-4">Our Milestones</h3>
            <div style={{ height: '600px', border: '2px solid #ddd', borderRadius: '8px' }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                edgeTypes={edgeTypes}
                connectionLineType={ConnectionLineType.Bezier}
                fitView
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStory;
