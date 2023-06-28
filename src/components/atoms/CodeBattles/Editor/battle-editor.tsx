import { Component, h, Host, Element, Prop, State } from '@stencil/core';
import * as monaco from 'monaco-editor';

@Component({
  tag: 'battle-editor',
  styleUrl: 'battle-editor.scss',
  shadow: true,
})
export class BattleEditor {
    @Prop() width = 80;
    @Prop() height = 80;

    @State() template = '';

    @Element() element: HTMLElement;
    editor: monaco.editor.IStandaloneCodeEditor;
  
    componentDidRender() {
      this.initializeEditor();
    }
  
    initializeEditor() {
      const editorElement = document.createElement('div');
      editorElement.id = 'code-editor';
      editorElement.style.height = `${this.height}vh`; // Set the desired height here
      editorElement.style.width = `${this.width}vw`; // Set the desired width here
      this.element.shadowRoot.appendChild(editorElement);
  
      this.editor = monaco.editor.create(editorElement, {
        value: this.template,
        language: 'java',
        theme: 'vs-dark',
        automaticLayout: true,
      });
  
      // Customize editor settings if needed
      this.editor.updateOptions({
        // options
      });

      
    }
  
    render() {
      return (
        <Host>
        </Host>
      );
    }
}
