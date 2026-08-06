export interface RatingCriterion {
  key: string;
  label: string;
  /** 0–5, 0 = trifft kaum zu, 5 = trifft voll zu (siehe Kriterientabellen). */
  score: number;
  reasoning: string;
}

export interface RatingCategory {
  key: string;
  title: string;
  criteria: RatingCriterion[];
}

export type TeamRatings = RatingCategory[];

function cat(key: string, title: string, criteria: RatingCriterion[]): RatingCategory {
  return { key, title, criteria };
}

function c(key: string, label: string, score: number, reasoning: string): RatingCriterion {
  return { key, label, score, reasoning };
}

// Reihenfolge & Bezeichnungen exakt nach den vier Bewertungstabellen
// (Teamqualität, Stabilität & Prognosesicherheit, Kader & Einsatzsicherheit,
// Kicker-Manager-Faktor). 0 Punkte = untere Spalte, 5 Punkte = obere Spalte.
export const teamRatings: Record<string, TeamRatings> = {
  "bayern-muenchen": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 5, "Seit Jahren der klare Titelfavorit mit dem größten Kader- und Finanzvorsprung der Liga."),
      c("offensivpotenzial", "Offensivpotenzial", 5, "Ø 3,25 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 122:36 in 34 Spielen; 2024/25 [1. Liga]: 99:32); Streuung σ=1,51, davon 4 Spiele ≥1,5σ über und 1 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 5, "Ø 1,00 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 36 Gegentore; 2024/25 [1. Liga]: 32); σ=1,00, davon 6 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 5, "Klar erkennbarer dominanter Ballbesitzfußball mit hohem Pressing – seit Jahren Markenzeichen des Klubs."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 5, "Größter und finanziell stabilster Klub der Liga mit durchgehend professionellen Strukturen."),
      c("trainerstabilitaet", "Trainerstabilität", 4, "Neuer Trainer, aber mit klarer Philosophie und großzügigem Vertrauen des Vereins ausgestattet."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt zusammen, punktuelle Transfers verändern aber jährlich Teile des Kaders."),
      c("leistungskonstanz", "Leistungskonstanz", 4, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 2,62, 2024/25: 2,41, 2023/24: 2,12, 2022/23: 2,09, 2021/22: 2,26 (σ=0,20)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 5, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 1 (1.Liga), 2024/25: Platz 1 (1.Liga), 2023/24: Platz 3 (1.Liga), 2022/23: Platz 1 (1.Liga), 2021/22: Platz 1 (1.Liga) (σ=0,80 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 4, "Kern der Startelf ist über weite Strecken gesetzt, punktuelle Rotation vor allem im Mittelfeld."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Champions-League-Belastung sorgt für spürbare Rotation, besonders im Herbst bei englischen Wochen."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Topspieler liefern konstant Punkte, sind im Manager-Kontext aber meist entsprechend teuer eingepreist."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Als Titelfavorit meist ausgeglichener Auftaktspielplan ohne systematische Erleichterung."),
      c("standardstaerke", "Standardstärke", 4, "Große, kopfballstarke Spieler und gute Ausführung machen Standards zu einer verlässlichen Torquelle."),
    ]),
  ],

  "bayer-leverkusen": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 4, "Nach dem Meistertitel weiterhin klarer Kandidat für die vorderen Plätze, auch wenn Bayern enteilt ist."),
      c("offensivpotenzial", "Offensivpotenzial", 5, "Ø 2,06 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 68:47 in 34 Spielen; 2024/25 [1. Liga]: 72:43); Streuung σ=1,45, davon 4 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 5, "Ø 1,32 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 47 Gegentore; 2024/25 [1. Liga]: 43); σ=1,09, davon 12 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Klares System vorhanden, befindet sich nach dem Trainerwechsel aber in der Neuausrichtung."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Solide Vereinsstrukturen und klare sportliche Leitung, auch nach dem Umbruch an der Seitenlinie."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Neuer Cheftrainer nach dem Abgang des Meistertrainers, Anpassung an neue Idee läuft noch."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Mehrere Schlüsselspieler des Meisterkaders wurden verkauft, Ersatz muss sich erst einspielen."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,74, 2024/25: 2,03, 2023/24: 2,65, 2022/23: 1,47, 2021/22: 1,88 (σ=0,39)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 4, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 6 (1.Liga), 2024/25: Platz 2 (1.Liga), 2023/24: Platz 1 (1.Liga), 2022/23: Platz 6 (1.Liga), 2021/22: Platz 3 (1.Liga) (σ=2,06 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Mehrere Positionen sind nach den Abgängen neu zu besetzen, was Rotation wahrscheinlicher macht."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Europapokal-Teilnahme sorgt für regelmäßige Rotation im Saisonverlauf."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Einige unterbewertete Spieler aus dem zweiten Glied bieten gutes Potenzial im Verhältnis zum Marktwert."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Als etablierter Spitzenklub meist ausgeglichener Auftaktspielplan."),
      c("standardstaerke", "Standardstärke", 3, "Solide, aber nicht überragend bei Standardsituationen im Ligavergleich."),
    ]),
  ],

  "rb-leipzig": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 4, "Kaderqualität reicht regelmäßig für einen Platz im oberen Tabellendrittel und die Champions-League-Ränge."),
      c("offensivpotenzial", "Offensivpotenzial", 4, "Ø 1,75 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 66:47 in 34 Spielen; 2024/25 [1. Liga]: 53:48); Streuung σ=1,35, davon 5 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 5, "Ø 1,40 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 47 Gegentore; 2024/25 [1. Liga]: 48); σ=1,53, davon 8 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Klares Pressing-Konzept ist erkennbar, wird aber je nach Trainer unterschiedlich interpretiert."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 3, "Klare Vereinsstruktur, aber wiederkehrende Diskussionen um sportliche Ausrichtung und Führungspersonal."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Häufige Trainerwechsel in den letzten Jahren erschweren eine langfristig konstante Spielidee."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Verkauft nahezu jeden Sommer Leistungsträger, wodurch sich die Mannschaft laufend neu finden muss."),
      c("leistungskonstanz", "Leistungskonstanz", 5, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,91, 2024/25: 1,50, 2023/24: 1,91, 2022/23: 1,94, 2021/22: 1,71 (σ=0,17)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 5, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 3 (1.Liga), 2024/25: Platz 7 (1.Liga), 2023/24: Platz 4 (1.Liga), 2022/23: Platz 3 (1.Liga), 2021/22: Platz 4 (1.Liga) (σ=1,47 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Breiter, talentierter Kader sorgt für gesunde Konkurrenz, aber auch für wechselnde Stammelf."),
      c("rotationsrisiko", "Rotationsrisiko", 2, "Junger, tiefer Kader wird gezielt rotiert, um Belastung zu steuern und Talente einzubinden."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 4, "Junge Spieler vor dem großen Transfer liefern häufig überdurchschnittliche Leistung für ihren aktuellen Marktwert."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan ohne klare Häufung von Topspielen oder Leichtgegnern."),
      c("standardstaerke", "Standardstärke", 3, "Physisch robuste Spieler sorgen für solide, aber nicht überragende Standardgefahr."),
    ]),
  ],

  "borussia-dortmund": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 4, "Kader ist auf Papier für die Champions-League-Plätze ausgelegt, auch wenn die Umsetzung schwankt."),
      c("offensivpotenzial", "Offensivpotenzial", 5, "Ø 2,07 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 70:34 in 34 Spielen; 2024/25 [1. Liga]: 71:51); Streuung σ=1,25, davon 9 Spiele ≥1,5σ über und 7 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 5, "Ø 1,25 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 34 Gegentore; 2024/25 [1. Liga]: 51); σ=1,13, davon 8 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Offensiv ausgerichteter, intensiver Fußball ist klar als Markenzeichen erkennbar."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Großer, finanziell solider Klub mit klaren, langfristigen Strukturen."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Nach mehreren Trainerwechseln der letzten Jahre aktuell auf der Suche nach langfristiger Konstanz."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern bleibt oft zusammen, einzelne Schlüsseltransfers verändern aber regelmäßig das Gefüge."),
      c("leistungskonstanz", "Leistungskonstanz", 4, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 2,15, 2024/25: 1,68, 2023/24: 1,85, 2022/23: 2,09, 2021/22: 2,03 (σ=0,17)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 5, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 2 (1.Liga), 2024/25: Platz 4 (1.Liga), 2023/24: Platz 5 (1.Liga), 2022/23: Platz 2 (1.Liga), 2021/22: Platz 2 (1.Liga) (σ=1,26 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Kern ist gesetzt, einzelne Positionen werden aber je nach Form und Gegner rotiert."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Europapokal-Programm führt zu regelmäßiger Rotation über die Saison."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Offensivspieler liefern gute Scorerwerte, sind aber im Manager entsprechend gefragt und bepreist."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als etablierter internationaler Klub."),
      c("standardstaerke", "Standardstärke", 4, "Physisch präsente Spieler und gute Ausführung machen Standards zu einer verlässlichen Waffe."),
    ]),
  ],

  "eintracht-frankfurt": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 3, "Kader reicht regelmäßig für einen Platz im internationalen Geschäft, ein Titelrennen ist aber unrealistisch."),
      c("offensivpotenzial", "Offensivpotenzial", 4, "Ø 1,90 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 61:65 in 34 Spielen; 2024/25 [1. Liga]: 68:46); Streuung σ=1,38, davon 8 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 2, "Ø 1,63 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 65 Gegentore; 2024/25 [1. Liga]: 46); σ=1,32, davon 5 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Offensives, risikofreudiges Spiel mit hohem Tempo ist klar als Stil erkennbar."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Professionell geführter Klub mit kontinuierlicher sportlicher Leitung und klarer Entwicklungslinie."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainer mit klarer Idee, allerdings ohne jahrelange Kontinuität an der Seitenlinie."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Verkauft nahezu jährlich seine besten Offensivspieler, was ständigen Umbau erfordert."),
      c("leistungskonstanz", "Leistungskonstanz", 4, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,29, 2024/25: 1,76, 2023/24: 1,38, 2022/23: 1,47, 2021/22: 1,24 (σ=0,19)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 3, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 8 (1.Liga), 2024/25: Platz 3 (1.Liga), 2023/24: Platz 6 (1.Liga), 2022/23: Platz 7 (1.Liga), 2021/22: Platz 11 (1.Liga) (σ=2,61 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Stammformation weitgehend erkennbar, verändert sich aber durch Verkäufe von Sommer zu Sommer."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Europapokal-Teilnahme führt zu spürbarer Rotation in englischen Wochen."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 4, "Bekannt dafür, unterbewertete Spieler zu entwickeln, die im Verhältnis zum Marktwert viel Leistung bieten."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan ohne systematische Häufung leichter oder schwerer Gegner."),
      c("standardstaerke", "Standardstärke", 3, "Solide Ausbeute bei Standards, aber kein herausragendes Alleinstellungsmerkmal."),
    ]),
  ],

  "vfb-stuttgart": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 3, "Nach dem Vize-Meister-Jahr weiterhin klarer Kandidat für die internationalen Plätze."),
      c("offensivpotenzial", "Offensivpotenzial", 5, "Ø 1,99 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 71:49 in 34 Spielen; 2024/25 [1. Liga]: 64:53); Streuung σ=1,33, davon 10 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 3, "Ø 1,50 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 49 Gegentore; 2024/25 [1. Liga]: 53); σ=1,25, davon 5 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Klar erkennbarer, mutiger Ballbesitzfußball unter Trainer Hoeneß."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Nach Jahren der Konsolidierung inzwischen sportlich wie strukturell klar aufgestellt."),
      c("trainerstabilitaet", "Trainerstabilität", 4, "Etablierter Trainer mit klarer Idee und großem Rückhalt im Verein."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der erfolgreichen Vorjahre bleibt weitgehend zusammen, einzelne Abgänge sind aber zu kompensieren."),
      c("leistungskonstanz", "Leistungskonstanz", 1, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,82, 2024/25: 1,47, 2023/24: 2,15, 2022/23: 0,97, 2021/22: 0,97 (σ=0,47)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 1, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 4 (1.Liga), 2024/25: Platz 9 (1.Liga), 2023/24: Platz 2 (1.Liga), 2022/23: Platz 16 (1.Liga), 2021/22: Platz 15 (1.Liga) (σ=5,64 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Stammelf weitgehend gesetzt, mit gesunder Konkurrenz auf einzelnen Positionen."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Europapokal-Programm sorgt für regelmäßige, aber überschaubare Rotation."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Mehrere Spieler bieten solides Preis-Leistungs-Verhältnis, ohne dass es ein Alleinstellungsmerkmal wäre."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als etablierter internationaler Teilnehmer."),
      c("standardstaerke", "Standardstärke", 3, "Solide, aber nicht überragende Gefahr bei Ecken und Freistößen."),
    ]),
  ],

  "sc-freiburg": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 3, "Regelmäßig im gesicherten Mittelfeld bis unteren internationalen Bereich, ein Abstiegskampf ist unwahrscheinlich."),
      c("offensivpotenzial", "Offensivpotenzial", 3, "Ø 1,47 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 51:57 in 34 Spielen; 2024/25 [1. Liga]: 49:53); Streuung σ=1,22, davon 4 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 3, "Ø 1,62 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 57 Gegentore; 2024/25 [1. Liga]: 53); σ=1,41, davon 8 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Sehr diszipliniertes, laufintensives System mit klarer taktischer Handschrift."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 5, "Gilt seit Jahrzehnten als eines der bestgeführten und stabilsten Umfelder der Liga."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Nach jahrzehntelanger Ära des früheren Trainers befindet sich der Klub in der Post-Streich-Konsolidierung."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt meist zusammen, einzelne Leistungsträger werden aber verkauft."),
      c("leistungskonstanz", "Leistungskonstanz", 4, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,38, 2024/25: 1,62, 2023/24: 1,24, 2022/23: 1,74, 2021/22: 1,62 (σ=0,18)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 4, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 7 (1.Liga), 2024/25: Platz 5 (1.Liga), 2023/24: Platz 10 (1.Liga), 2022/23: Platz 5 (1.Liga), 2021/22: Platz 6 (1.Liga) (σ=1,85 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Stammelf ist über weite Strecken der Saison erkennbar und wenig experimentierfreudig."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Ohne durchgehendes Europapokal-Programm überschaubares, planbares Rotationsrisiko."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Einzelne Spieler bieten gutes Preis-Leistungs-Verhältnis, eine große Kaderbreite an Value-Picks fehlt aber."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan ohne erkennbare Häufung."),
      c("standardstaerke", "Standardstärke", 3, "Solide Ausbeute bei Standardsituationen dank guter Organisation im Strafraum."),
    ]),
  ],

  "tsg-hoffenheim": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 2, "Kader bewegt sich meist im unteren Mittelfeld, mit Nähe zur Abstiegszone in schwachen Phasen."),
      c("offensivpotenzial", "Offensivpotenzial", 4, "Ø 1,63 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 65:52 in 34 Spielen; 2024/25 [1. Liga]: 46:68); Streuung σ=1,31, davon 6 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 1, "Ø 1,76 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 52 Gegentore; 2024/25 [1. Liga]: 68); σ=1,37, davon 10 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Häufige Trainer- und Systemwechsel verhindern eine klar erkennbare Spielidee."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Wiederholte Umbrüche in der sportlichen Leitung sorgen für spürbare Unruhe."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Zählt zu den Klubs mit den häufigsten Trainerwechseln der letzten Jahre."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Kader wird regelmäßig umgebaut, ohne dass sich ein fester Stamm etabliert."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,79, 2024/25: 0,94, 2023/24: 1,35, 2022/23: 1,06, 2021/22: 1,35 (σ=0,30)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 2, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 5 (1.Liga), 2024/25: Platz 15 (1.Liga), 2023/24: Platz 7 (1.Liga), 2022/23: Platz 12 (1.Liga), 2021/22: Platz 9 (1.Liga) (σ=3,56 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 2, "Häufige System- und Personalwechsel sorgen für wenig gesetzte Positionen."),
      c("rotationsrisiko", "Rotationsrisiko", 2, "Ohne internationalen Wettbewerb geringer externer Druck, aber trainerbedingt hohe interne Rotation."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Einzelne Offensivspieler können im Verhältnis zu ihrem Marktwert überraschend viel liefern."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als Mittelfeldklub ohne internationale Verpflichtungen."),
      c("standardstaerke", "Standardstärke", 2, "Keine besondere Auffälligkeit bei Standardsituationen im Ligavergleich."),
    ]),
  ],

  "werder-bremen": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 2, "Kader ist meist auf gesichertes Mittelfeld ausgelegt, ein Abstiegskampf ist aber nicht ausgeschlossen."),
      c("offensivpotenzial", "Offensivpotenzial", 2, "Ø 1,34 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 37:60 in 34 Spielen; 2024/25 [1. Liga]: 54:57); Streuung σ=1,24, davon 6 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 2, "Ø 1,72 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 60 Gegentore; 2024/25 [1. Liga]: 57); σ=1,38, davon 8 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Offensiv ausgerichteter, mutiger Fußball mit erkennbarer Handschrift des Trainers."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 3, "Nach der Rückkehr in die Liga inzwischen wieder solide und ruhig geführt."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainer mit mehrjähriger Amtszeit und klarer Idee für die Mannschaft."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt über mehrere Spielzeiten weitgehend zusammen."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 0,94, 2024/25: 1,50, 2023/24: 1,24, 2022/23: 1,06, 2021/22: 1,85 (σ=0,33)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 2, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 15 (1.Liga), 2024/25: Platz 8 (1.Liga), 2023/24: Platz 9 (1.Liga), 2022/23: Platz 13 (1.Liga), 2021/22: Platz 2 (2.Liga) (σ=4,34 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Stammelf ist über weite Strecken erkennbar, mit punktueller Rotation bei jungen Spielern."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Ohne Europapokal überschaubares und gut planbares Rotationsrisiko."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Junge Offensivspieler bieten teils gutes Verhältnis von Leistung zu Marktwert."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als Mittelfeldklub."),
      c("standardstaerke", "Standardstärke", 2, "Keine besondere Stärke bei Ecken oder Freistößen erkennbar."),
    ]),
  ],

  "vfl-wolfsburg": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 2, "Kader bewegt sich meist im unteren Mittelfeld mit Nähe zur Abstiegszone."),
      c("offensivpotenzial", "Offensivpotenzial", 3, "Ø 1,49 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 45:69 in 34 Spielen; 2024/25 [1. Liga]: 56:54); Streuung σ=1,19, davon 3 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 1, "Ø 1,81 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 69 Gegentore; 2024/25 [1. Liga]: 54); σ=1,46, davon 7 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Häufige Trainer- und Konzeptwechsel verhindern eine klar wiedererkennbare Spielidee."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Wiederholte Umbrüche in sportlicher Leitung und Kader sorgen für Unruhe im Umfeld."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Mehrere Trainerwechsel in den letzten Jahren ohne langfristige Kontinuität."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Kader wird häufig umgebaut, ohne dass sich ein stabiler Stamm etabliert."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 0,85, 2024/25: 1,26, 2023/24: 1,09, 2022/23: 1,44, 2021/22: 1,24 (σ=0,20)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 3, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 16 (1.Liga), 2024/25: Platz 11 (1.Liga), 2023/24: Platz 12 (1.Liga), 2022/23: Platz 8 (1.Liga), 2021/22: Platz 12 (1.Liga) (σ=2,56 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 2, "Wechselnde Trainer und Systeme sorgen für wenig konstant gesetzte Positionen."),
      c("rotationsrisiko", "Rotationsrisiko", 2, "Ohne internationalen Wettbewerb geringer externer Druck, aber trainerbedingt spürbare Rotation."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 2, "Wenige Spieler stechen im Verhältnis von Leistung zu Marktwert positiv hervor."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als Mittelfeldklub."),
      c("standardstaerke", "Standardstärke", 2, "Keine besondere Auffälligkeit bei Standardsituationen im Ligavergleich."),
    ]),
  ],

  "borussia-moenchengladbach": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 2, "Nach schwierigen Jahren aktuell eher im unteren Mittelfeld mit Nähe zur Abstiegszone einzuordnen."),
      c("offensivpotenzial", "Offensivpotenzial", 2, "Ø 1,43 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 42:53 in 34 Spielen; 2024/25 [1. Liga]: 55:57); Streuung σ=1,30, davon 8 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 2, "Ø 1,62 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 53 Gegentore; 2024/25 [1. Liga]: 57); σ=1,50, davon 7 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Seit dem Ende der erfolgreichen Rose-Ära fehlt eine klar wiedererkennbare Spielidee."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Mehrere Umbrüche in sportlicher Leitung und Kader seit dem Ende der Erfolgsjahre."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Häufige Trainerwechsel ohne die Rückkehr zu langfristiger Kontinuität."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Verlust mehrerer Leistungsträger der Erfolgsjahre erfordert laufenden Kaderumbau."),
      c("leistungskonstanz", "Leistungskonstanz", 5, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,12, 2024/25: 1,32, 2023/24: 1,00, 2022/23: 1,26, 2021/22: 1,32 (σ=0,13)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 5, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 12 (1.Liga), 2024/25: Platz 10 (1.Liga), 2023/24: Platz 14 (1.Liga), 2022/23: Platz 10 (1.Liga), 2021/22: Platz 10 (1.Liga) (σ=1,60 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 2, "Umbauphase sorgt für offene Positionen und häufigere Rotation."),
      c("rotationsrisiko", "Rotationsrisiko", 2, "Ohne internationalen Wettbewerb planbar, aber durch Formsuche dennoch wechselhaft."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 2, "Kader bietet aktuell wenige Spieler mit auffällig gutem Verhältnis von Leistung zu Marktwert."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als Mittelfeldklub."),
      c("standardstaerke", "Standardstärke", 2, "Keine besondere Stärke bei Standardsituationen erkennbar."),
    ]),
  ],

  "fc-augsburg": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 2, "Kader ist traditionell auf den Klassenerhalt im gesicherten Mittelfeld ausgelegt."),
      c("offensivpotenzial", "Offensivpotenzial", 2, "Ø 1,18 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 45:61 in 34 Spielen; 2024/25 [1. Liga]: 35:51); Streuung σ=0,98, davon 7 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 2, "Ø 1,65 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 61 Gegentore; 2024/25 [1. Liga]: 51); σ=1,45, davon 9 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Pragmatischer, gut organisierter Fußball mit klarer, wiedererkennbarer Handschrift."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Ruhig und kontinuierlich geführter Klub mit klaren, langfristigen Strukturen."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Vergleichsweise stabile Trainersituation mit klarer Idee für die Mannschaft."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt über mehrere Spielzeiten weitgehend zusammen."),
      c("leistungskonstanz", "Leistungskonstanz", 5, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,26, 2024/25: 1,26, 2023/24: 1,15, 2022/23: 1,00, 2021/22: 1,12 (σ=0,10)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 4, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 9 (1.Liga), 2024/25: Platz 12 (1.Liga), 2023/24: Platz 11 (1.Liga), 2022/23: Platz 15 (1.Liga), 2021/22: Platz 14 (1.Liga) (σ=2,14 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Stammelf ist über weite Strecken der Saison erkennbar und wenig experimentierfreudig."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Ohne internationalen Wettbewerb überschaubares und gut planbares Rotationsrisiko."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Einzelne Spieler bieten solides Preis-Leistungs-Verhältnis im Manager-Kontext."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als etablierter Mittelfeldklub."),
      c("standardstaerke", "Standardstärke", 2, "Keine besondere Auffälligkeit bei Standardsituationen im Ligavergleich."),
    ]),
  ],

  "mainz-05": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 3, "Kader reicht regelmäßig für das gesicherte bis obere Mittelfeld, ein internationaler Platz ist in guten Jahren möglich."),
      c("offensivpotenzial", "Offensivpotenzial", 2, "Ø 1,46 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 44:53 in 34 Spielen; 2024/25 [1. Liga]: 55:43); Streuung σ=1,13, davon 2 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 4, "Ø 1,41 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 53 Gegentore; 2024/25 [1. Liga]: 43); σ=1,13, davon 6 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Laufintensiver, druckvoller Fußball ist klar als Stil des Klubs erkennbar."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Solide, ruhig geführte Vereinsstrukturen mit klarer sportlicher Linie."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainer mit klarer Idee und wachsendem Vertrauen des Vereins."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt über mehrere Spielzeiten weitgehend zusammen."),
      c("leistungskonstanz", "Leistungskonstanz", 5, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,18, 2024/25: 1,53, 2023/24: 1,03, 2022/23: 1,35, 2021/22: 1,35 (σ=0,17)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 4, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 10 (1.Liga), 2024/25: Platz 6 (1.Liga), 2023/24: Platz 13 (1.Liga), 2022/23: Platz 9 (1.Liga), 2021/22: Platz 8 (1.Liga) (σ=2,32 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Stammelf ist über weite Strecken der Saison erkennbar."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Ohne durchgehendes Europapokal-Programm überschaubares Rotationsrisiko."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Einzelne Spieler bieten gutes Preis-Leistungs-Verhältnis im Manager-Kontext."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als Mittelfeldklub."),
      c("standardstaerke", "Standardstärke", 2, "Keine besondere Stärke bei Standardsituationen im Ligavergleich."),
    ]),
  ],

  "union-berlin": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 2, "Nach dem Fall aus dem internationalen Geschäft aktuell eher im unteren Mittelfeld mit Nähe zur Abstiegszone."),
      c("offensivpotenzial", "Offensivpotenzial", 1, "Ø 1,16 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 44:58 in 34 Spielen; 2024/25 [1. Liga]: 35:51); Streuung σ=1,11, davon 7 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 3, "Ø 1,60 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 58 Gegentore; 2024/25 [1. Liga]: 51); σ=1,33, davon 6 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Die früher klar erkennbare, kompakte Spielidee ist durch mehrere Umbrüche verwässert worden."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Nach Jahren beispielhafter Kontinuität sorgten mehrere Umbrüche zuletzt für spürbare Unruhe."),
      c("trainerstabilitaet", "Trainerstabilität", 1, "Mehrere Trainerwechsel innerhalb kurzer Zeit nach jahrelanger Kontinuität davor."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Abgang mehrerer prägender Spieler erfordert einen umfassenden Kaderumbau."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,15, 2024/25: 1,18, 2023/24: 0,97, 2022/23: 1,82, 2021/22: 1,68 (σ=0,33)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 1, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 11 (1.Liga), 2024/25: Platz 13 (1.Liga), 2023/24: Platz 15 (1.Liga), 2022/23: Platz 4 (1.Liga), 2021/22: Platz 5 (1.Liga) (σ=4,36 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 2, "Umbauphase sorgt für offene Positionen und häufigere Rotation."),
      c("rotationsrisiko", "Rotationsrisiko", 2, "Formsuche und Trainerwechsel führen zu wechselhafter Aufstellungspolitik."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 2, "Kader bietet aktuell wenige Spieler mit auffällig gutem Verhältnis von Leistung zu Marktwert."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als Mittelfeldklub."),
      c("standardstaerke", "Standardstärke", 3, "Physisch robuste Spieler sorgen weiterhin für solide Gefahr bei Standardsituationen."),
    ]),
  ],

  "fc-st-pauli": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 1, "Kader ist auf den Klassenerhalt ausgelegt, ein Abstiegskampf ist wahrscheinlich."),
      c("offensivpotenzial", "Offensivpotenzial", 1, "Ø 0,84 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 29:60 in 34 Spielen; 2024/25 [1. Liga]: 28:41); Streuung σ=0,90, davon 4 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 4, "Ø 1,49 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 60 Gegentore; 2024/25 [1. Liga]: 41); σ=1,12, davon 3 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Kämpferischer, laufintensiver Fußball mit starker Fanunterstützung prägt die klare Identität des Klubs."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 3, "Klar strukturierter, kulturell geprägter Verein mit stabilem Umfeld abseits des reinen Sports."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainerteam mit klarer Idee, die den Aufstieg und die erste Bundesliga-Saison geprägt hat."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Als Aufsteiger mit begrenztem Budget muss der Kader nach jeder Saison neu zusammengestellt werden."),
      c("leistungskonstanz", "Leistungskonstanz", 1, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 0,76, 2024/25: 0,94, 2023/24: 2,03, 2022/23: 1,71, 2021/22: 1,68 (σ=0,48)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 2, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 18 (1.Liga), 2024/25: Platz 14 (1.Liga), 2023/24: Platz 1 (2.Liga), 2022/23: Platz 5 (2.Liga), 2021/22: Platz 5 (2.Liga) (σ=3,38 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Kleinerer Kader sorgt für eine über weite Strecken vorhersehbare Stammelf."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Ohne internationalen Wettbewerb und mit kompaktem Kader geringes systematisches Rotationsrisiko."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 2, "Einzelne Spieler können als günstige Überraschung dienen, verlässliche Value-Picks sind aber schwer zu identifizieren."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan ohne systematische Erleichterung oder Erschwernis."),
      c("standardstaerke", "Standardstärke", 2, "Keine besondere Auffälligkeit bei Standardsituationen im Ligavergleich."),
    ]),
  ],

  "1-fc-koeln": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 1, "Als Aufsteiger ist der Klassenerhalt das realistische Saisonziel, ein Abstiegskampf ist wahrscheinlich."),
      c("offensivpotenzial", "Offensivpotenzial", 3, "Ø 1,50 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 49:63 in 34 Spielen; 2024/25 [2. Liga]: 53:38); Streuung σ=1,12, davon 5 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 4, "Ø 1,49 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 63 Gegentore; 2024/25 [2. Liga]: 38); σ=1,19, davon 4 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Die wiederkehrenden Auf- und Abstiege erschweren eine über Jahre wiedererkennbare Spielidee."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Historisch geprägt von häufiger Unruhe und wechselnden sportlichen Verantwortlichen."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Trainerposition war in der Klubgeschichte selten über mehrere Jahre konstant besetzt."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Aufstiegskader wird für die Bundesliga punktuell verstärkt, was Eingewöhnungszeit braucht."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 0,94, 2024/25: 1,79, 2023/24: 0,79, 2022/23: 1,24, 2021/22: 1,53 (σ=0,37)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 2, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 14 (1.Liga), 2024/25: Platz 1 (2.Liga), 2023/24: Platz 17 (1.Liga), 2022/23: Platz 11 (1.Liga), 2021/22: Platz 7 (1.Liga) (σ=4,27 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 2, "Als Aufsteiger mit begrenzter Kadertiefe grundsätzlich planbar, aber unter Bundesliga-Belastung ungetestet."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Ohne internationalen Wettbewerb und mit kompaktem Kader eher geringes Rotationsrisiko."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 2, "Als Aufsteiger mit niedrigen Marktwerten theoretisch Potenzial für Value-Picks, aber unsichere Bundesliga-Tauglichkeit."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan ohne systematische Erleichterung."),
      c("standardstaerke", "Standardstärke", 2, "Keine besondere Auffälligkeit bei Standardsituationen erkennbar."),
    ]),
  ],

  "hamburger-sv": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 1, "Nach 17 Jahren zweiter Liga ist der Klassenerhalt das realistische Ziel, ein Abstiegskampf ist wahrscheinlich."),
      c("offensivpotenzial", "Offensivpotenzial", 4, "Ø 1,74 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 40:54 in 34 Spielen; 2024/25 [2. Liga]: 78:44); Streuung σ=1,37, davon 7 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 4, "Ø 1,44 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 54 Gegentore; 2024/25 [2. Liga]: 44); σ=1,19, davon 6 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Nach Jahren in der zweiten Liga muss sich eine für die Bundesliga tragfähige Spielidee erst etablieren."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Nach Jahren der Unruhe in der zweiten Liga zuletzt spürbar stabiler geführt, Bundesliga-Bewährungsprobe steht aber noch aus."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainer hat den Aufstieg begleitet und genießt entsprechendes Vertrauen für die erste Bundesliga-Saison."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Aufstiegskader wird für die Bundesliga punktuell verstärkt, was Eingewöhnungszeit erfordert."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 1,12, 2024/25: 1,74, 2023/24: 1,71, 2022/23: 1,94, 2021/22: 1,76 (σ=0,28)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 3, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 13 (1.Liga), 2024/25: Platz 2 (2.Liga), 2023/24: Platz 4 (2.Liga), 2022/23: Platz 3 (2.Liga), 2021/22: Platz 3 (2.Liga) (σ=3,26 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 2, "Aufstiegs-Stammelf grundsätzlich erkennbar, unter Bundesliga-Belastung aber noch ungetestet."),
      c("rotationsrisiko", "Rotationsrisiko", 3, "Ohne internationalen Wettbewerb und mit eingespieltem Kern eher geringes Rotationsrisiko."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 2, "Niedrige Marktwerte bieten theoretisches Value-Potenzial, die Bundesliga-Tauglichkeit ist aber unsicher."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan ohne systematische Erleichterung."),
      c("standardstaerke", "Standardstärke", 2, "Keine besondere Auffälligkeit bei Standardsituationen erkennbar."),
    ]),
  ],

  "1-fc-heidenheim": [
    cat("teamqualitaet", "Teamqualität", [
      c("tabellenpotenzial", "Tabellenpotenzial", 2, "Kleinster Kader der Liga, der sich seit dem Aufstieg regelmäßig im gesicherten Mittelfeld behauptet."),
      c("offensivpotenzial", "Offensivpotenzial", 1, "Ø 1,15 Tore/Spiel in den letzten zwei Spielzeiten (2025/26: 41:72 in 34 Spielen; 2024/25 [1. Liga]: 37:64); Streuung σ=1,10, davon 9 Spiele ≥1,5σ über und 0 Spiele ≥1,5σ unter dem eigenen Mittel (bei angenommener Normalverteilung der Tore je Spiel)."),
      c("defensivstaerke", "Defensivstärke", 1, "Ø 2,00 Gegentore/Spiel in den letzten zwei Spielzeiten (2025/26: 72 Gegentore; 2024/25 [1. Liga]: 64); σ=1,35, davon 2 Spiele ≥1,5σ über dem Mittel (auffällig viele Gegentore) und 0 Spiele ≥1,5σ darunter (Zu-Null- bzw. Ein-Tor-Spiele)."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Sehr klare, seit Jahren gleichbleibende taktische Handschrift des langjährigen Trainers."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Über Jahrzehnte konstant und mit klarer Entwicklungslinie von der Regionalliga bis in die Bundesliga geführt."),
      c("trainerstabilitaet", "Trainerstabilität", 5, "Einer der am längsten amtierenden Trainer im europäischen Profifußball, seit vielen Jahren im Amt."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt trotz begrenztem Budget über mehrere Spielzeiten weitgehend zusammen."),
      c("leistungskonstanz", "Leistungskonstanz", 1, "Punkteschnitt pro Spiel über die letzten 5 Spielzeiten: 2025/26: 0,76, 2024/25: 0,85, 2023/24: 1,24, 2022/23: 1,97, 2021/22: 1,53 (σ=0,45)."),
      c("tabellenkonstanz", "Tabellenkonstanz", 1, "Abschlussplatzierungen der letzten 5 Spielzeiten: 2025/26: Platz 17 (1.Liga), 2024/25: Platz 16 (1.Liga), 2023/24: Platz 8 (1.Liga), 2022/23: Platz 1 (2.Liga), 2021/22: Platz 6 (2.Liga) (σ=5,19 Plätze, 2.-Liga-Ränge auf 1.-Liga-Skala mit +18 verrechnet)."),
    ]),
    cat("kader", "Kader & Einsatzsicherheit", [
      c("startelfSicherheit", "Startelf-Sicherheit", 3, "Kleiner, eingespielter Kader sorgt für eine über weite Strecken feste Stammelf."),
      c("rotationsrisiko", "Rotationsrisiko", 4, "Ohne internationalen Wettbewerb und mit kompaktem Kader sehr geringes Rotationsrisiko."),
    ]),
    cat("kickerManager", "Kicker-Manager-Faktor", [
      c("managerwert", "Managerwert (Preis-Leistung)", 3, "Einzelne Spieler bieten im Verhältnis zu ihrem geringen Marktwert überdurchschnittlich viel Leistung."),
      c("spielplan", "Spielplan (erste 8–10 Spieltage)", 3, "Ausgeglichener Auftaktspielplan als etablierter Mittelfeldklub."),
      c("standardstaerke", "Standardstärke", 3, "Physisch robuste Spieler sorgen für solide Gefahr bei Standardsituationen."),
    ]),
  ],
};

export function getTeamRatings(slug: string): TeamRatings | undefined {
  return teamRatings[slug];
}

function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

export function categoryMean(category: RatingCategory): number {
  return average(category.criteria.map((c) => c.score));
}

export function overallMean(categories: TeamRatings): number {
  return average(categories.flatMap((cat) => cat.criteria.map((c) => c.score)));
}
