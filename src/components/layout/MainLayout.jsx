import React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import MediaLibrary from '../media/MediaLibrary';
import Player from '../player/Player';
import PropertiesPanel from '../properties/PropertiesPanel';
import Timeline from '../timeline/Timeline';

export default function MainLayout() {
  return (
    <PanelGroup direction="vertical" className="h-full w-full">
      <Panel defaultSize={65}>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={20} minSize={15} className="p-2 bg-dark-surface">
            <MediaLibrary />
          </Panel>
          <PanelResizeHandle className="w-2 bg-dark-bg hover:bg-dark-accent transition-colors" />
          <Panel minSize={30}>
            <PanelGroup direction="vertical">
              <Panel defaultSize={70} minSize={40} className="p-4 flex items-center justify-center bg-black">
                <Player />
              </Panel>
              <PanelResizeHandle className="h-2 bg-dark-bg hover:bg-dark-accent transition-colors" />
              <Panel defaultSize={30} minSize={20} className="p-2 bg-dark-surface">
                <PropertiesPanel />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </Panel>
      <PanelResizeHandle className="h-2 bg-dark-bg hover:bg-dark-accent transition-colors" />
      <Panel defaultSize={35} minSize={20} className="bg-dark-surface">
        <Timeline />
      </Panel>
    </PanelGroup>
  );
}
