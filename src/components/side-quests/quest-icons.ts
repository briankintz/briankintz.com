// Line-icon watermarks for the Side Quests cards. Notebook style: 24×24 viewBox,
// stroke = currentColor, ~2.2px non-scaling hairline, round caps/joins.
// Each value is the inner SVG markup (injected into <svg> in QuestIcon).
export const ICONS: Record<string, string> = {
  mountains: `<path d="M2 19.5 8.5 7 13 14 16.5 9 22 19.5" /><path d="M6.3 11.4 8.5 7 10.7 11.4" />`,

  paraglider: `<path d="M2.5 9 Q12 4 21.5 9" /><path d="M5 9.3 11 15.8" /><path d="M19 9.3 13 15.8" /><path d="M11 15.8 13 15.8" /><circle cx="12" cy="17.8" r="1.5" />`,

  snowflake: `<path d="M12 12 12 2.7 M12 6.6 14.07 4.3 M12 6.6 9.93 4.3 M12 12 20.05 7.35 M16.68 9.3 19.71 9.94 M16.68 9.3 17.63 6.35 M12 12 20.05 16.65 M16.68 14.7 17.63 17.65 M16.68 14.7 19.71 14.06 M12 12 12 21.3 M12 17.4 9.93 19.7 M12 17.4 14.07 19.7 M12 12 3.95 16.65 M7.32 14.7 4.29 14.06 M7.32 14.7 6.37 17.65 M12 12 3.95 7.35 M7.32 9.3 6.37 6.35 M7.32 9.3 4.29 9.94" />`,

  plant: `<path d="M5.6 14 7.4 20.8 16.6 20.8 18.4 14" /><path d="M5 14 19 14" /><path d="M12 14 12 8" /><path d="M12 11.5 Q7.5 11 8.2 5.8 Q12.2 6.6 12 11.5 Z" /><path d="M12 10 Q16.5 9.2 16 4.6 Q12 5.6 12 10 Z" />`,

  guitar: `<circle cx="8.5" cy="15.5" r="5.2" /><circle cx="8.5" cy="15.5" r="1.6" /><path d="M11.9 11.7 18.4 5.2" /><path d="M17.4 4.2 20.4 7.2 18.8 8.8 15.8 5.8 Z" />`,

  fire: `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3A2.5 2.5 0 0 0 8.5 14.5z" />`,

  taco: `<path d="M3 13 A 9 8.5 0 0 0 21 13" /><path d="M3 13 Q4.8 9.3 7 13 Q9 9.3 11.2 13 Q13.4 9.3 15.6 13 Q17.8 9.3 20.5 13" />`,

  sailboat: `<path d="M12 3 12 15.5" /><path d="M10.8 5 10.8 14.5 5.2 14.5 Z" /><path d="M13.2 7.5 13.2 14.5 18 14.5 Z" /><path d="M3.5 16 20.5 16 Q17.5 20.5 12 20.5 Q6.5 20.5 3.5 16 Z" />`,

  chip: `<rect x="9" y="9" width="6" height="6" rx="1.2" /><path d="M12 9 12 4.5" /><circle cx="12" cy="3.4" r="1" /><path d="M12 15 12 19.5" /><circle cx="12" cy="20.6" r="1" /><path d="M9 12 4.5 12" /><circle cx="3.4" cy="12" r="1" /><path d="M15 12 19.5 12" /><circle cx="20.6" cy="12" r="1" /><path d="M15 10.8 17.6 10.8 17.6 6.6" /><circle cx="17.6" cy="5.5" r="1" /><path d="M9 13.2 6.4 13.2 6.4 17.4" /><circle cx="6.4" cy="18.5" r="1" />`,

  dancer: `<circle cx="14.5" cy="4.3" r="2.1" /><path d="M13.6 6.3 11.4 12.6" /><path d="M12.9 8.2 16.8 6.4 18.2 3.6" /><path d="M12.4 9.9 8.2 10.2" /><path d="M11.4 12.6 8.2 15.8 9.1 19.6" /><path d="M11.4 12.6 14.6 15.6 14.1 20" />`,
}
