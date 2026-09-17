/**
 * Karl Marx: Die entfremdete Arbeit (1844)
 * Interaktive Texterschließung, Glossar & Stufenhilfen
 * Philosophie Q1 • Herr Dayi
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. SYSTEMATISCHE BEGRIFFSDATENBANK (MARX: ANTHROPOLOGIE & ENTFREMDUNG)
    // =========================================================================
    const vocabDatabase = {
        // --- 1. Anthropologisches Ideal: Das Gattungswesen ---
        'Gattungswesen': {
            type: '1. Anthropologischer Leitbegriff (Marx / Feuerbach)',
            def: 'Das spezifische, bewusste und schöpferische Wesen des Menschen im Unterschied zum Tier: Der Mensch ist nicht unmittelbar mit seiner Tätigkeit identisch, sondern macht sein eigenes Leben zum Gegenstand seines Willens und Bewusstseins.',
            context: 'Für Marx verwirklicht sich der Mensch als „Gattungswesen“, indem er in freier Kooperation mit anderen die unorganische Natur bewusst und gestaltend bearbeitet. Die Arbeit ist eigentlich der Wesensausdruck menschlicher Schöpferkraft.'
        },
        'Universelle vs. einseitige Produktion': {
            type: '1. Anthropologische Differenz (Mensch vs. Tier)',
            def: 'Tiere produzieren nur „einseitig“ und instinktgesteuert unter der Herrschaft des unmittelbaren biologischen Überlebensbedarfs (z. B. Bienenwaben, Vogelnester). Der Mensch hingegen produziert „universell“ und in wahrer Freiheit.',
            context: 'Wahrhaft menschlich wird Produktion erst dann, wenn sie frei vom reinen Überlebensdruck ist. Der Mensch kann über die gesamte Natur verfügen, Werkzeuge für künftige Zwecke erfinden und die Welt nach Maßstäben gestalten, die über das nackte Fressen und Schlafen hinausgehen.'
        },
        'Gesetze der Schönheit': {
            type: '1. Ästhetische Wesensbestimmung',
            def: 'Die Fähigkeit des Menschen, Gegenstände zweckfrei, harmonisch und nach ästhetischen Proportionen zu gestalten – jenseits der bloßen Notdurft.',
            context: 'Kein Tier baut eine Wabe nach ästhetischem Kunstempfinden; es folgt purem Instinkt. Dass der Mensch nach den Gesetzen der Schönheit formieren kann, ist der unumstößliche Beweis seiner geistigen Freiheit und schöpferischen Potenz.'
        },

        // --- 2. Entfremdung vom Produkt der Arbeit ---
        'Vergegenständlichung (Objektivierung)': {
            type: '2. Arbeitsphilosophischer Grundprozess',
            def: 'Der Prozess, durch den menschliche Arbeitskraft, Ideen und Zeit in einem konkreten materiellen Gegenstand stoffliche Gestalt annehmen („sich im Gegenstand fixieren“).',
            context: 'Im Idealzustand erkennt der Schöpfer im Werk seine eigene Kreativität gespiegelt. In der kapitalistischen Lohnarbeit jedoch verkehrt sich dieser Akt in sein Gegenteil: Die Vergegenständlichung wird zum Verlust des Gegenstandes („Entwirklichung des Arbeiters“).'
        },
        'Entfremdung & Entäußerung': {
            type: '2. Gesellschaftskritischer Leitbegriff',
            def: 'Der Zustand der Entzweiung, in dem die eigene Schöpfung, die Arbeitstätigkeit und das menschliche Wesen dem Individuum als etwas Äußerliches, Fremdes und Beherrschendes gegenübertreten.',
            context: 'Der Arbeiter verkauft seine Lebenszeit für Lohn. Das hergestellte Produkt gehört nicht ihm, sondern dem Fabrikbesitzer. Die Arbeit drückt nicht sein Wesen aus, sondern entzieht ihm seine Lebenskraft.'
        },
        'Herrschaft des Kapitals': {
            type: '2. Ökonomisch-philosophische Diagnose',
            def: 'Die verkehrte Machtordnung der modernen Industrie: Das tote, akkumulierte Produkt vergangener Arbeit (Kapital, Maschinen) beherrscht den lebendigen Arbeiter, statt ihm als dienendes Werkzeug zu nützen.',
            context: 'Marx formuliert hier ein Gesetz der kapitalistischen Ökonomie: „Je mehr Gegenstände der Arbeiter produziert, um so mehr gerät er unter die Herrschaft seines Produkts, des Kapitals. Was das Produkt seiner Arbeit ist, ist er nicht.“'
        },

        // --- 3. Entfremdung von der Tätigkeit & Kasteiung ---
        'Kasteiung der Physis & Ruin des Geistes': {
            type: '3. Psychophysische Zerstörung des Subjekts',
            def: 'Kasteien bedeutet quälen, martern oder schädigen. Marx benennt die drastischen körperlichen und seelischen Folgeschäden industrieller Ausbeutung.',
            context: 'In der Fabrikarbeit entfaltet der Mensch keine freie Energie, sondern verschleißt seine Gesundheit, Haltung und Nerven („Physis kasteien“) und verkümmert geistig durch monotone, geistlose Fließbandgriffe („Geist ruinieren“).'
        },
        'Zwangsarbeit': {
            type: '3. Arbeitsbegriff im Kapitalismus',
            def: 'Arbeit, die nicht freiwillig aus innerem Schöpfungsdrang geleistet wird, sondern unter dem existentiellen Zwang des nackten physischen Überlebens („wer nicht arbeitet, verhungert“).',
            context: 'Die Arbeit ist nicht die Befriedigung eines Bedürfnisses (Freude an Gestaltung), sondern nur ein primitives Mittel zum Gelderwerb. Beweis für Marx: Sobald kein physischer Zwang mehr existiert, wird die Arbeit „wie eine Pest geflohen“.'
        },

        // --- 4. Das anthropologische Paradoxon ---
        'Anthropologisches Paradoxon': {
            type: '4. Dialektische Kernpointe & Diagnose',
            def: 'Die paradoxe Verkehrung der menschlichen Lebensäußerungen: „Das Tierische wird das Menschliche und das Menschliche das Tierische.“',
            context: 'Frei fühlt sich der Arbeiter nur noch bei seinen tierischen Grundfunktionen (Essen, Trinken, Zeugen), weil er dort keinem Chef gehorchen muss. In seiner eigentlich spezifisch menschlichen Tätigkeit (der Arbeit) wird er hingegen wie ein willenloses Lasttier behandelt.'
        },
        'Tierische vs. menschliche Funktionen': {
            type: '4. Anthropologische Begriffsdifferenzierung',
            def: 'Biologische Grundbedürfnisse (Essen, Trinken, Fortpflanzung) sind zwar auch menschlich, aber wenn sie durch entfremdete Arbeit zum einzigen Inhalt und Endzweck des Lebens werden, wird der Mensch auf die Stufe des Tiers herabgewürdigt.',
            context: 'Marx warnt vor der isolierten Betrachtung: Wenn der Feierabend nur noch dazu dient, den ermatteten Körper durch Nahrung und Schlaf für die nächste Schicht funktionstüchtig zu machen, ist das Leben auf reine Tier-Funktion reduziert.'
        }
    };

    // =========================================================================
    // 2. DOM-ELEMENTE
    // =========================================================================
    const vocabCard = document.getElementById('vocab-card');
    const vocabPlaceholder = document.getElementById('vocab-placeholder');
    const vocabContent = document.getElementById('vocab-content');
    const vocabTitle = document.getElementById('vocab-title');
    const vocabType = document.getElementById('vocab-type');
    const vocabDef = document.getElementById('vocab-definition');
    const vocabContext = document.getElementById('vocab-context');

    const chapTabBtns = document.querySelectorAll('.chap-tab-btn');
    const chapPanels = document.querySelectorAll('.chap-panel');

    const btnTextDec = document.getElementById('btn-text-decrease');
    const btnTextInc = document.getElementById('btn-text-increase');
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    const themeText = document.getElementById('theme-text');

    let currentScale = 1.0;

    // =========================================================================
    // 3. TAB NAVIGATION (TAB 1 & TAB 2)
    // =========================================================================
    chapTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-chap-tab');

            chapTabBtns.forEach(b => b.classList.remove('active'));
            chapPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPanel = document.getElementById(`chap-panel-${targetTab}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // =========================================================================
    // 4. INTERAKTIVES GLOSSAR (BEGRIFFE ANKLICKEN)
    // =========================================================================
    function showVocab(termKey, clickedEl) {
        const data = vocabDatabase[termKey];
        if (!data) return;

        // Markierung der Begriffe
        document.querySelectorAll('.vocab-term').forEach(el => el.classList.remove('active'));
        if (clickedEl) {
            clickedEl.classList.add('active');
        }

        // Inhalt aktualisieren
        vocabTitle.textContent = termKey;
        vocabType.textContent = data.type;
        vocabDef.textContent = data.def;
        vocabContext.textContent = data.context;

        vocabPlaceholder.classList.add('hidden');
        vocabContent.classList.remove('hidden');

        // Sanftes Hervorheben
        if (vocabCard) {
            vocabCard.style.borderColor = 'var(--primary-accent)';
            setTimeout(() => {
                vocabCard.style.borderColor = 'var(--primary-blue)';
            }, 600);
        }
    }

    document.querySelectorAll('.vocab-term').forEach(termEl => {
        termEl.addEventListener('click', () => {
            const termKey = termEl.getAttribute('data-term') || termEl.textContent.trim();
            showVocab(termKey, termEl);
        });
    });

    // Klick auf Tag-Cloud in Tab 2
    document.querySelectorAll('.term-tag').forEach(tagEl => {
        tagEl.addEventListener('click', () => {
            const termKey = tagEl.getAttribute('data-term') || tagEl.textContent.trim();
            // Wechsle zu Tab 1 und zeige Glossar
            const textTabBtn = document.querySelector('[data-chap-tab="text"]');
            if (textTabBtn) textTabBtn.click();
            showVocab(termKey);
        });
    });

    // =========================================================================
    // 5. SCHRIFTGRÖSSEN-ZOOM
    // =========================================================================
    if (btnTextDec && btnTextInc) {
        btnTextDec.addEventListener('click', () => {
            if (currentScale > 0.85) {
                currentScale -= 0.08;
                document.documentElement.style.setProperty('--text-scale', `${currentScale}rem`);
            }
        });
        btnTextInc.addEventListener('click', () => {
            if (currentScale < 1.4) {
                currentScale += 0.08;
                document.documentElement.style.setProperty('--text-scale', `${currentScale}rem`);
            }
        });
    }

    // =========================================================================
    // 6. DARK MODE TOGGLE
    // =========================================================================
    if (btnThemeToggle) {
        btnThemeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            if (themeText) {
                themeText.textContent = isDark ? 'Hellmodus' : 'Dunkelmodus';
            }
        });
    }

    // =========================================================================
    // 7. INTERAKTIVER SCHALTER: SINNABSCHNITTE & ZWISCHENÜBERSCHRIFTEN
    // =========================================================================
    const toggleSections = document.getElementById('toggle-sections');
    const sectionsOverview = document.getElementById('sections-overview');
    const sectionHeadings = document.querySelectorAll('.section-heading-wrapper');

    if (toggleSections) {
        toggleSections.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            if (sectionsOverview) {
                if (isChecked) {
                    sectionsOverview.classList.remove('hidden');
                } else {
                    sectionsOverview.classList.add('hidden');
                }
            }
            sectionHeadings.forEach(wrapper => {
                if (isChecked) {
                    wrapper.classList.remove('hidden');
                } else {
                    wrapper.classList.add('hidden');
                }
            });
        });
    }

});
