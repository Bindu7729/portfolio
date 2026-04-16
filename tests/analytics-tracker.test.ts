import { describe, it, expect } from 'vitest';
import { createTelemetryQueue } from '../src/utils/analyticsTracker';

describe('Privacy Telemetry Queue Utility', () => {
  it('enqueues tracking events and respects max capacity', () => {
    const tracker = createTelemetryQueue(2);
    tracker.track('view_project', { projectId: 'studyhub' });
    tracker.track('view_project', { projectId: 'codevista' });
    tracker.track('click_github', { url: 'https://github.com/Bindu7729' });

    const events = tracker.getEvents();
    expect(events).toHaveLength(2);
    expect(events[0].eventName).toBe('view_project');
    expect(events[0].properties?.projectId).toBe('codevista');
    expect(events[1].eventName).toBe('click_github');
  });

  it('clears queue when requested', () => {
    const tracker = createTelemetryQueue();
    tracker.track('page_view');
    tracker.clear();
    expect(tracker.getEvents()).toHaveLength(0);
  });
});
