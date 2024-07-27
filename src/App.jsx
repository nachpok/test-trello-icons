import React, { useState } from 'react';

function App() {
    const [filter, setFilter] = useState('');

    const iconClasses = [
        'icon-activity', 'icon-add', 'icon-add-member', 'icon-add-reaction',
        'icon-admin-chevron', 'icon-app-store', 'icon-application-switcher',
        'icon-archive', 'icon-attachment', 'icon-automation', 'icon-back',
        'icon-board', 'icon-board-collection', 'icon-box', 'icon-business-class',
        'icon-butler-bot', 'icon-calendar', 'icon-camera', 'icon-card',
        'icon-card-aging', 'icon-card-cover', 'icon-card-recurring', 'icon-check',
        'icon-check-circle', 'icon-checkbox-checked', 'icon-checkbox-unchecked',
        'icon-checklist', 'icon-clock', 'icon-close', 'icon-collection',
        'icon-comment', 'icon-copy', 'icon-custom-field', 'icon-dashboard',
        'icon-description', 'icon-documents', 'icon-down', 'icon-download',
        'icon-dropbox', 'icon-dropdown-options', 'icon-edit', 'icon-email',
        'icon-emoji', 'icon-enterprise', 'icon-external-link', 'icon-facebook',
        'icon-filter', 'icon-flag', 'icon-fogbugz', 'icon-forward', 'icon-gear',
        'icon-github', 'icon-google', 'icon-google-drive', 'icon-heart', 'icon-help',
        'icon-home', 'icon-house', 'icon-image', 'icon-information', 'icon-instagram',
        'icon-key', 'icon-kiln', 'icon-label', 'icon-leave-board', 'icon-lightbulb',
        'icon-lightbulb-lit', 'icon-list', 'icon-location', 'icon-log-out',
        'icon-member', 'icon-mention', 'icon-microphone', 'icon-microphone-off',
        'icon-move', 'icon-nearby', 'icon-notification', 'icon-number', 'icon-onedrive',
        'icon-open-source', 'icon-organization', 'icon-organization-visible',
        'icon-overflow-menu-horizontal', 'icon-overflow-menu-vertical',
        'icon-password-manager', 'icon-placeholder', 'icon-power-up', 'icon-preferences',
        'icon-priority-highest', 'icon-private', 'icon-public', 'icon-refresh',
        'icon-remove', 'icon-remove-member', 'icon-reply', 'icon-screenshare',
        'icon-search', 'icon-selection-mode', 'icon-send', 'icon-share', 'icon-slack',
        'icon-sparkle', 'icon-star', 'icon-starred', 'icon-sticker', 'icon-subscribe',
        'icon-sync', 'icon-table', 'icon-taco', 'icon-template-board', 'icon-template-card',
        'icon-template-create', 'icon-text', 'icon-timeline', 'icon-trash',
        'icon-trello-gold', 'icon-twitter', 'icon-up', 'icon-upload', 'icon-video',
        'icon-video-off', 'icon-view-calendar', 'icon-view-dashboard', 'icon-view-gallery',
        'icon-view-list', 'icon-view-map', 'icon-view-table', 'icon-view-timeline',
        'icon-view-whiteboard', 'icon-vote', 'icon-warning'
    ];

    const filteredIcons = iconClasses.filter((iconClass) =>
        iconClass.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="app">
            <h1>Trello Icons by class name</h1>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter icons..."
                className="filter-input"
            />
            <div className="icon-container">
                {filteredIcons.map((iconClass, index) => (
                    <div key={index} className={`icon ${iconClass}`}>
                        {iconClass.replace('icon-', '')}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;