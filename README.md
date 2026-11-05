# MMBbS Teaching Assistant

Ein Unterrichtsassistent für Tafel und Beamer im Corporate Design der Multi Media Berufsbildenden Schulen Hannover.

**Aufrufen:** https://herr-fr.github.io/Gopilot_teaching-assistent/

## Funktionen

- Unterricht: Zufall, Timer, Lautstärke-Ampel, Karten, Sterne und Klassenziel, Vokabeln
- Check-in mit Lernstrategie des Tages und Check-out mit Zufriedenheit, Lichtblicken und Reflexionsfragen
- Bibliothek mit Lernstrategien, Zufallsfragen in Fragenboxen, Sessionmarkt mit Warteliste
- Medien am Beamer: Webseiten, PDF, Bilder, Word, Videos und Text, dazu ein Fokus-Modus

## Nutzung

1. Die Adresse oben in Chrome, Edge oder Safari öffnen.
2. Auf **Beamer-Fenster zeigen** klicken und das neue Fenster auf den Beamer ziehen.
3. Alles steuerst du im Dashboard, der Beamer zeigt nur, was die Klasse sehen soll.

**iPad:** Die Adresse in Safari öffnen und über Teilen > *Zum Home-Bildschirm* ablegen. So bleiben die Daten auch erhalten, wenn du die Seite länger nicht öffnest. Das Beamer-Fenster getrennt vom Dashboard anzeigen geht nur mit Stage Manager und externem Bildschirm (iPads mit M-Chip), sonst wird gespiegelt.

## Datenschutz

Alle Klassen, Namen, Karten und Dateien bleiben im Browser des jeweiligen Geräts. Die Seite schickt keine Eingaben an einen Server, setzt keine Cookies und nutzt kein Tracking. Die Anzeigeprogramme für PDF (PDF.js), Word (mammoth.js) und QR-Codes (qrcode-generator) sowie die Schrift Roboto sind in die Datei eingebaut, es wird nichts nachgeladen.

Externe Dienste kommen nur ins Spiel, wenn du sie selbst nutzt: eingebettete Webseiten und Videos unter *Medien* und die automatische Übersetzung unter *Vokabeln* (Dienst MyMemory, abschaltbar). Sichere deine Daten regelmäßig unter *Einstellungen > Backup speichern*.

## Aktualisieren

Eine neue Version als `index.html` hochladen. Der Workflow unter `.github/workflows/pages.yml` veröffentlicht sie automatisch nach jedem Push auf `main`.

## Enthaltene Programme

PDF.js (Apache 2.0), mammoth.js (BSD-2-Clause), qrcode-generator (MIT). Die Lizenztexte stehen im Quelltext von `index.html`.

## Herkunft

Nach einer Idee von [classtiles.de](https://classtiles.de).
