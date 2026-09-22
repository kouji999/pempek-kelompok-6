// script.js — Interaksi dan rendering UI dari data.js
// Semua konten berasal dari window.PKK_DATA (single source of truth).

(function () {
  "use strict";

  const D = window.PKK_DATA;
  if (!D) return;

  /* ---------- Helper escape HTML (keamanan + placeholder aman) ---------- */
  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ---------- Navbar ---------- */
  function renderNav() {
    const list = document.getElementById("navList");
    if (!list) return;
    list.innerHTML = D.nav
      .map(
        (item) =>
          `<li><a class="nav__link" href="${esc(item.href)}">${esc(item.label)}</a></li>`
      )
      .join("");
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    const container = document.getElementById("heroContent");
    if (!container) return;
    const h = D.hero;
    container.innerHTML = `
      <p class="eyebrow reveal">${esc(h.eyebrow)}</p>
      <h1 class="hero__title reveal" id="heroTitle" data-delay="1">${esc(h.title)}</h1>
      <p class="hero__subtitle reveal" data-delay="2">${esc(h.subtitle)}</p>
      <div class="hero__actions reveal" data-delay="3">
        <a class="btn btn--primary" href="${esc(h.ctaPrimary.href)}">${esc(h.ctaPrimary.label)}</a>
        <a class="btn btn--ghost" href="${esc(h.ctaSecondary.href)}">${esc(h.ctaSecondary.label)}</a>
      </div>
    `;
    // re-trigger reveal for new elements
    const reveals = container.querySelectorAll(".reveal");
    reveals.forEach(el => el.classList.add("reveal"));
    // observer will pick them up later
  }

  /* ---------- Footer nav ---------- */
  function renderFooter() {
    const a = document.getElementById("footerNavA");
    const b = document.getElementById("footerNavB");
    const mid = Math.ceil(D.nav.length / 2);
    const halfA = D.nav.slice(0, mid);
    const halfB = D.nav.slice(mid);

    if (a)
      a.innerHTML =
        `<p class="footer__nav-title">Navigasi</p>` +
        halfA
          .map((i) => `<a class="footer__link" href="${esc(i.href)}">${esc(i.label)}</a>`)
          .join("");
    if (b)
      b.innerHTML =
        `<p class="footer__nav-title">Jelajahi</p>` +
        halfB
          .map((i) => `<a class="footer__link" href="${esc(i.href)}">${esc(i.label)}</a>`)
          .join("");

    const bottom = document.getElementById("footerBottom");
    if (bottom) {
      bottom.innerHTML =
        `<span>${esc(D.footer.hak)}</span><span>${esc(D.footer.credits)}</span>`;
    }
  }

  /* ---------- Product single item ---------- */
  function renderProduct() {
    const container = document.getElementById("productContainer");
    if (!container) return;
    const p = D.product;
    const it = p.item;
    container.innerHTML = `
      <article class="variant-card reveal" style="max-width:640px;">
        <h3 class="variant-card__name">${esc(it.name)}</h3>
        <p class="variant-card__desc">${esc(p.description)}</p>
        <div class="product-specs" style="margin-top:1rem;display:flex;flex-wrap:wrap;gap:0.5rem;">
          <span class="spec-chip" style="background:var(--beige);padding:0.3rem 0.8rem;border-radius:999px;font-size:0.85rem;"><strong>Type:</strong> ${esc(it.type)}</span>
          <span class="spec-chip" style="background:var(--beige);padding:0.3rem 0.8rem;border-radius:999px;font-size:0.85rem;"><strong>Category:</strong> ${esc(it.category)}</span>
          <span class="spec-chip" style="background:var(--beige);padding:0.3rem 0.8rem;border-radius:999px;font-size:0.85rem;"><strong>Target:</strong> ${esc(it.targetMarket)}</span>
          <span class="spec-chip" style="background:var(--beige);padding:0.3rem 0.8rem;border-radius:999px;font-size:0.85rem;"><strong>Positioning:</strong> ${esc(it.positioning)}</span>
          <span class="spec-chip" style="background:var(--beige);padding:0.3rem 0.8rem;border-radius:999px;font-size:0.85rem;"><strong>Price:</strong> ${esc(it.price)}</span>
          <span class="spec-chip" style="background:var(--beige);padding:0.3rem 0.8rem;border-radius:999px;font-size:0.85rem;"><strong>Quantity:</strong> ${esc(it.quantity)}</span>
        </div>
      </article>
    `;
  }

  /* ---------- Value propositions ---------- */
  function renderValues() {
    const grid = document.getElementById("valueGrid");
    if (!grid) return;
    const iconMap = {
      bahan: "B",
      tim: "T",
      bersih: "K",
      rasa: "R",
    };
    grid.innerHTML = D.valuePropositions
      .map(
        (v) => `
        <article class="value-card reveal">
          <div class="value-card__icon" aria-hidden="true">${esc(iconMap[v.ikon] || "•")}</div>
          <h3 class="value-card__title">${esc(v.judul)}</h3>
          <p class="value-card__desc">${esc(v.deskripsi)}</p>
        </article>`
      )
      .join("");
  }

  /* ---------- Journey timeline ---------- */
  function renderTimeline() {
    const wrap = document.getElementById("timeline");
    if (!wrap) return;
    wrap.innerHTML = D.journey.stages
      .map(
        (s) => `
        <div class="timeline__item reveal">
          <div class="timeline__node" aria-hidden="true"></div>
          <div class="timeline__content">
            <p class="timeline__stage">${esc(s.tahap)}</p>
            <h3 class="timeline__title">${esc(s.judul)}</h3>
            <p class="timeline__desc">${esc(s.deskripsi)}</p>
          </div>
        </div>`
      )
      .join("");
  }

  /* ---------- Process steps ---------- */
  function renderProcess() {
    const grid = document.getElementById("processGrid");
    if (!grid) return;
    grid.innerHTML = D.process.steps
      .map(
        (s) => `
        <article class="process-step reveal">
          <span class="process-step__number" aria-hidden="true">${esc(s.nomor)}</span>
          <h3 class="process-step__title">${esc(s.judul)}</h3>
          <p class="process-step__desc">${esc(s.deskripsi)}</p>
        </article>`
      )
      .join("");
  }

  /* ---------- Progress dashboard ---------- */
  function renderProgress() {
    const metrics = document.getElementById("progressMetrics");
    if (metrics) {
      metrics.innerHTML = D.progress.metrics
        .map(
          (m) => `
          <div class="metric">
            <p class="metric__value">${esc(m.nilai)}</p>
            <p class="metric__label">${esc(m.label)}${m.satuan ? " (" + esc(m.satuan) + ")" : ""}</p>
          </div>`
        )
        .join("");
    }

    const wrap = document.getElementById("progressWrap");
    if (wrap) {
      wrap.innerHTML = `
        <div class="progress-wrap__head">
          <span class="progress-wrap__label">${esc(D.progress.progressBar.label)}</span>
          <span class="progress-wrap__value">${esc(D.progress.progressBar.value)}%</span>
        </div>
        <div class="progress-bar" role="progressbar"
          aria-valuemin="0" aria-valuemax="${esc(D.progress.progressBar.max)}"
          aria-valuenow="${esc(D.progress.progressBar.value)}"
          aria-label="${esc(D.progress.progressBar.label)}">
          <div class="progress-bar__fill" data-value="${esc(D.progress.progressBar.value)}"></div>
        </div>`;
    }
  }

  /* ---------- Quality checklist ---------- */
  function renderChecklist() {
    const list = document.getElementById("checklist");
    if (!list) return;
    list.innerHTML = D.quality.checklist
      .map(
        (c) => `
        <div class="check-item reveal">
          <span class="check-item__box" aria-hidden="true"></span>
          <div>
            <p class="check-item__label">${esc(c.item)}</p>
            <p class="check-item__standar">${esc(c.standar)}</p>
          </div>
        </div>`
      )
      .join("");
  }

  /* ---------- Packaging ---------- */
  function renderPackaging() {
    const list = document.getElementById("packagingFeatures");
    if (!list) return;
    list.innerHTML = D.packaging.features
      .map(
        (f) => `
        <div class="packaging__feature reveal">
          <span class="packaging__feature-label">${esc(f.label)}</span>
          <span class="packaging__feature-text">${esc(f.isi)}</span>
        </div>`
      )
      .join("");
  }

  /* ---------- Marketing ---------- */
  function renderMarketing() {
    const grid = document.getElementById("marketingGrid");
    if (grid) {
      grid.innerHTML = D.marketing.strategies
        .map(
          (s, i) => `
          <article class="strategy-card reveal">
            <p class="strategy-card__num">${String(i + 1).padStart(2, "0")}</p>
            <h3 class="strategy-card__title">${esc(s.judul)}</h3>
            <p class="strategy-card__desc">${esc(s.deskripsi)}</p>
          </article>`
        )
        .join("");
    }

    const funnel = document.getElementById("funnel");
    if (funnel) {
      funnel.innerHTML = D.marketing.funnel.stages
        .map(
          (f, i) => `
          <div class="funnel__stage reveal">
            <p class="funnel__stage-num" aria-hidden="true">${i + 1}</p>
            <p class="funnel__stage-title">${esc(f.tahap)}</p>
            <p class="funnel__stage-desc">${esc(f.deskripsi)}</p>
          </div>`
        )
        .join("");
    }
  }

  /* ---------- Sales ---------- */
  function renderSales() {
    const metrics = document.getElementById("salesMetrics");
    if (metrics) {
      metrics.innerHTML = D.sales.metrics
        .map(
          (m) => `
          <div class="metric reveal">
            <p class="metric__value">${esc(m.nilai)}</p>
            <p class="metric__label">${esc(m.label)}${m.satuan ? " (" + esc(m.satuan) + ")" : ""}</p>
          </div>`
        )
        .join("");
    }

    const chart = document.getElementById("barChart");
    if (chart) {
      chart.innerHTML = D.sales.barChart.data
        .map(
          (d) => `
          <div class="bar-chart__col">
            <span class="bar-chart__value">${esc(d.nilai)}</span>
            <div class="bar-chart__bar-wrap">
              <div class="bar-chart__bar" data-bar></div>
            </div>
            <span class="bar-chart__label">${esc(d.periode)}</span>
          </div>`
        )
        .join("");
    }
  }

  /* ---------- Financial ---------- */
  function renderFinancial() {
    const expenses = document.getElementById("finExpenses");
    if (expenses) {
      expenses.innerHTML = D.financial.categories
        .map(
          (c) => `
          <tr>
            <td>${esc(c.label)}</td>
            <td class="fin-table__type">${esc(c.tipe)}</td>
            <td>${esc(c.nilai)}</td>
          </tr>`
        )
        .join("");
    }

    const summary = document.getElementById("finSummary");
    if (summary) {
      summary.innerHTML =
        `<h3 class="fin-panel__title" style="color:var(--cream);">Ringkasan</h3>` +
        D.financial.ringkasan
          .map(
            (r) => `
            <div class="summary-card__row">
              <span class="summary-card__label">${esc(r.label)}</span>
              <span class="summary-card__value">${esc(r.nilai)}</span>
            </div>`
          )
          .join("") +
        `<p class="summary-card__formula">${esc(D.financial.formula)}</p>`;
    }
  }

  /* ---------- Insight ---------- */
  function renderInsight() {
    const grid = document.getElementById("insightGrid");
    if (!grid) return;
    grid.innerHTML = D.insight.poin
      .map(
        (p) => `
        <article class="insight-card reveal">
          <h3 class="insight-card__title">${esc(p.judul)}</h3>
          <p class="insight-card__desc">${esc(p.deskripsi)}</p>
        </article>`
      )
      .join("");
  }

  /* ---------- Team ---------- */
  function renderTeam() {
    const grid = document.getElementById("teamGrid");
    if (!grid) return;
    grid.innerHTML = D.team.members
      .map(
        (m) => {
          const initials = m.nama
            .replace(/\[|\]/g, "")
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((w) => w.charAt(0).toUpperCase())
            .join("");
          return `
          <article class="team-card reveal">
            <div class="team-card__avatar" aria-hidden="true">${esc(initials || "?")}</div>
            <h3 class="team-card__name">${esc(m.nama)}</h3>
            <p class="team-card__role">${esc(m.peran)}</p>
            <p class="team-card__desc">${esc(m.deskripsi)}</p>
          </article>`;
        }
      )
      .join("");
  }

  /* ---------- Evaluation ---------- */
  function renderEvaluation() {
    const grid = document.getElementById("evalGrid");
    if (!grid) return;
    const cls = ["eval-col--strength", "eval-col--weakness", "eval-col--lesson"];
    grid.innerHTML = D.evaluation.columns
      .map(
        (c, i) => `
        <article class="eval-col ${cls[i] || ""} reveal">
          <h3 class="eval-col__title">${esc(c.judul)}</h3>
          <p class="eval-col__desc">${esc(c.deskripsi)}</p>
          <ul class="eval-col__list">
            ${c.items.map((item) => `<li class="eval-col__item">${esc(item)}</li>`).join("")}
          </ul>
        </article>`
      )
      .join("");
  }

  /* ---------- Render semua ---------- */
  function renderAll() {
    renderNav();
    renderFooter();
    renderVariants();
    renderValues();
    renderTimeline();
    renderProcess();
    renderProgress();
    renderChecklist();
    renderPackaging();
    renderMarketing();
    renderSales();
    renderFinancial();
    renderInsight();
    renderTeam();
    renderEvaluation();
  }

  /* ---------- Navbar interactions ---------- */
  function initNav() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("navToggle");
    const list = document.getElementById("navList");

    const onScroll = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && list) {
      toggle.addEventListener("click", () => {
        const open = list.classList.toggle("is-open");
        toggle.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute(
          "aria-label",
          open ? "Tutup menu navigasi" : "Buka menu navigasi"
        );
      });

      list.addEventListener("click", (e) => {
        if (e.target.closest(".nav__link")) {
          list.classList.remove("is-open");
          toggle.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Buka menu navigasi");
        }
      });
    }
  }

  /* ---------- Back to top ---------- */
  function initBackTop() {
    const btn = document.getElementById("backTop");
    if (!btn) return;
    const onScroll = () => {
      btn.classList.toggle("is-visible", window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Skip link ---------- */
  function initSkipLink() {
    const link = document.querySelector(".skip-link");
    if (!link) return;
    link.addEventListener("focus", () => {
      link.style.left = "1rem";
      link.style.top = "1rem";
    });
    link.addEventListener("blur", () => {
      link.style.left = "-9999px";
      link.style.top = "0";
    });
  }

  /* ---------- Intersection Observer reveal ---------- */
  function initReveal() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const elements = document.querySelectorAll(".reveal");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay
              ? parseInt(entry.target.dataset.delay, 10) * 100
              : 0;
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ---------- Progress bar + bar chart animation ---------- */
  function animateMetrics() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Progress bar
    const fill = document.querySelector(".progress-bar__fill");
    if (fill) {
      const raw = fill.dataset.value || "0";
      const num = parseInt(raw.replace(/[^\d]/g, ""), 10) || 0;
      requestAnimationFrame(() => {
        fill.style.width = reduceMotion ? num + "%" : "0%";
        if (!reduceMotion) {
          setTimeout(() => {
            fill.style.width = num + "%";
          }, 120);
        }
      });
    }

    // Bar chart — tinggi bar konstan karena nilai placeholder, pakai height animasi
    const bars = document.querySelectorAll(".bar-chart__bar");
    if (bars.length) {
      bars.forEach((bar, i) => {
        if (reduceMotion) {
          bar.style.height = "100%";
        } else {
          bar.style.height = "0%";
          setTimeout(() => {
            bar.style.height = "100%";
          }, 150 + i * 120);
        }
      });
    }
  }

  /* ---------- Scroll reveal untuk elemen dinamis ---------- */
  function observeDynamic() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll(".reveal:not(.is-visible)")
      .forEach((el) => observer.observe(el));
  }

  /* ---------- Init ---------- */
  function init() {
    renderAll();
    initNav();
    initBackTop();
    initSkipLink();
    observeDynamic();
    animateMetrics();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();