import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'Mini Minecraft',
      description: 'A voxel engine in C++ and OpenGL simulating world exploration with procedurally generated terrain, block placement and removal, an inventory system, player physics, and custom shader-driven lighting.',
      githubUrl: 'https://github.com/sophiaszczepek/Mini-Minecraft'
    },
    {
      title: 'Mesh Editor',
      description: 'An interactive desktop tool using a half-edge data structure to support face triangulation, vertex operations, Catmull-Clark subdivision.',
      githubUrl: 'https://github.com/sophiaszczepek/Mesh-Editor'
    },

    {
      title: 'My Website',
      description: 'This website, built modularly with Angular and TypeScript.',
      githubUrl: 'https://github.com/sophiaszczepek/My-Website'
    },

    {
      title: 'Rasterizer',
      description: 'A CPU rasterizer implemented in C++, handling triangulation with z-buffering, perspective-correct interpolation of vertex attributes, and per-pixel shading.',
      githubUrl: 'https://github.com/sophiaszczepek/Rasterizer'
    },

    {
      title: 'Interview Questions',
      description: 'Solutions in Java to five interview questions, including roommate selection, airport code change, and odd-sized family trees.',
      githubUrl: 'https://github.com/sophiaszczepek/Interview-Questions'
    },

    {
      title: 'Graph Algorithms',
      description: 'Implementations in Java of some graph algorithms, including Breadth-First Search and Dijkstra, and implementations of solutions for the island bridge problem, widest path problem, a resizing deque, and a maze solver. Includes a full test suite. ',
      githubUrl: 'https://github.com/sophiaszczepek/Graph-Algorithms'
    }
  ];

}
