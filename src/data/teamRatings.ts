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
      c("offensivpotenzial", "Offensivpotenzial", 5, "Mit Abstand torgefährlichste Offensive der Liga, angeführt von Kane und einem tiefen Kreis an Angreifern."),
      c("defensivstaerke", "Defensivstärke", 5, "Kompakte, gut organisierte Defensive mit konstant hoher Zu-Null-Quote in der Vergangenheit."),
      c("spielerischeIdentitaet", "Spielerische Identität", 5, "Klar erkennbarer dominanter Ballbesitzfußball mit hohem Pressing – seit Jahren Markenzeichen des Klubs."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 5, "Größter und finanziell stabilster Klub der Liga mit durchgehend professionellen Strukturen."),
      c("trainerstabilitaet", "Trainerstabilität", 4, "Neuer Trainer, aber mit klarer Philosophie und großzügigem Vertrauen des Vereins ausgestattet."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt zusammen, punktuelle Transfers verändern aber jährlich Teile des Kaders."),
      c("leistungskonstanz", "Leistungskonstanz", 5, "Verliert selten mehrere Spiele in Folge und liefert über die Saison das konstanteste Niveau der Liga."),
      c("tabellenkonstanz", "Tabellenkonstanz", 5, "Seit über einem Jahrzehnt durchgehend an der Tabellenspitze."),
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
      c("offensivpotenzial", "Offensivpotenzial", 4, "Trotz einiger Abgänge weiterhin eine der torgefährlichsten Offensivreihen der Liga."),
      c("defensivstaerke", "Defensivstärke", 4, "Solide, gut organisierte Abwehr, die unter der Meistersaison Maßstäbe gesetzt hat."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Klares System vorhanden, befindet sich nach dem Trainerwechsel aber in der Neuausrichtung."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Solide Vereinsstrukturen und klare sportliche Leitung, auch nach dem Umbruch an der Seitenlinie."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Neuer Cheftrainer nach dem Abgang des Meistertrainers, Anpassung an neue Idee läuft noch."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Mehrere Schlüsselspieler des Meisterkaders wurden verkauft, Ersatz muss sich erst einspielen."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Kann auf hohem Niveau spielen, in Umbruchsphasen aber anfälliger für Schwankungen."),
      c("tabellenkonstanz", "Tabellenkonstanz", 4, "Seit Jahren im vorderen Tabellendrittel etabliert."),
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
      c("offensivpotenzial", "Offensivpotenzial", 4, "Schnelles, vertikales Umschaltspiel sorgt konstant für hohe Torgefahr."),
      c("defensivstaerke", "Defensivstärke", 3, "Grundsätzlich stabil, aber durch jährliche Kaderumbrüche nicht immer über die volle Saison konstant."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Klares Pressing-Konzept ist erkennbar, wird aber je nach Trainer unterschiedlich interpretiert."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 3, "Klare Vereinsstruktur, aber wiederkehrende Diskussionen um sportliche Ausrichtung und Führungspersonal."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Häufige Trainerwechsel in den letzten Jahren erschweren eine langfristig konstante Spielidee."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Verkauft nahezu jeden Sommer Leistungsträger, wodurch sich die Mannschaft laufend neu finden muss."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Phasenweise sehr stark, dazwischen aber auch überraschende Ausrutscher gegen schwächere Gegner."),
      c("tabellenkonstanz", "Tabellenkonstanz", 4, "Seit dem Aufstieg durchgehend im oberen Tabellendrittel vertreten."),
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
      c("offensivpotenzial", "Offensivpotenzial", 4, "Verfügt traditionell über eine der torgefährlichsten Offensiven der Liga."),
      c("defensivstaerke", "Defensivstärke", 3, "Immer wieder anfällig für individuelle Fehler, die die eigentlich vorhandene Qualität konterkarieren."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Offensiv ausgerichteter, intensiver Fußball ist klar als Markenzeichen erkennbar."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Großer, finanziell solider Klub mit klaren, langfristigen Strukturen."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Nach mehreren Trainerwechseln der letzten Jahre aktuell auf der Suche nach langfristiger Konstanz."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern bleibt oft zusammen, einzelne Schlüsseltransfers verändern aber regelmäßig das Gefüge."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Bekannt für große Schwankungen zwischen Champions-League-Form und überraschenden Ligapleiten."),
      c("tabellenkonstanz", "Tabellenkonstanz", 3, "Landet meist im oberen Drittel, die genaue Platzierung schwankt aber spürbar von Jahr zu Jahr."),
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
      c("offensivpotenzial", "Offensivpotenzial", 4, "Mutiger, vertikaler Offensivfußball macht das Team zu einer der torgefährlichsten Mannschaften im Mittelfeld der Liga."),
      c("defensivstaerke", "Defensivstärke", 3, "Offensiv ausgerichtetes System geht gelegentlich zulasten der defensiven Stabilität."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Offensives, risikofreudiges Spiel mit hohem Tempo ist klar als Stil erkennbar."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Professionell geführter Klub mit kontinuierlicher sportlicher Leitung und klarer Entwicklungslinie."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainer mit klarer Idee, allerdings ohne jahrelange Kontinuität an der Seitenlinie."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Verkauft nahezu jährlich seine besten Offensivspieler, was ständigen Umbau erfordert."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Kann über weite Strecken stark performen, verliert aber auch überraschend gegen schwächere Gegner."),
      c("tabellenkonstanz", "Tabellenkonstanz", 3, "Pendelt seit Jahren zwischen internationalen Plätzen und gesichertem Mittelfeld."),
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
      c("offensivpotenzial", "Offensivpotenzial", 4, "Mutiger, kombinationsstarker Offensivfußball sorgt konstant für hohe Torgefahr."),
      c("defensivstaerke", "Defensivstärke", 3, "Grundsätzlich solide organisiert, aber durch die offensive Ausrichtung nicht immer die stabilste Defensive."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Klar erkennbarer, mutiger Ballbesitzfußball unter Trainer Hoeneß."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Nach Jahren der Konsolidierung inzwischen sportlich wie strukturell klar aufgestellt."),
      c("trainerstabilitaet", "Trainerstabilität", 4, "Etablierter Trainer mit klarer Idee und großem Rückhalt im Verein."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der erfolgreichen Vorjahre bleibt weitgehend zusammen, einzelne Abgänge sind aber zu kompensieren."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Insgesamt konstantes Niveau, mit vereinzelten Schwächephasen gegen tiefstehende Gegner."),
      c("tabellenkonstanz", "Tabellenkonstanz", 2, "Erst seit wenigen Jahren wieder im oberen Tabellendrittel etabliert, Platzierungen schwankten davor stark."),
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
      c("offensivpotenzial", "Offensivpotenzial", 2, "Fehlt meist an einem konstant torgefährlichen Angreifer, Tore werden breit verteilt erarbeitet."),
      c("defensivstaerke", "Defensivstärke", 3, "Diszipliniertes, gut organisiertes Defensivverhalten ist traditionell eine Stärke des Klubs."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Sehr diszipliniertes, laufintensives System mit klarer taktischer Handschrift."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 5, "Gilt seit Jahrzehnten als eines der bestgeführten und stabilsten Umfelder der Liga."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Nach jahrzehntelanger Ära des früheren Trainers befindet sich der Klub in der Post-Streich-Konsolidierung."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt meist zusammen, einzelne Leistungsträger werden aber verkauft."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Über weite Strecken der Saison konstant, mit gelegentlichen Formtälern."),
      c("tabellenkonstanz", "Tabellenkonstanz", 4, "Seit vielen Jahren zuverlässig im gesicherten Mittelfeld bis oberen Drittel."),
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
      c("offensivpotenzial", "Offensivpotenzial", 3, "Grundsätzlich vorhandene Offensivqualität, die aber nicht konstant abgerufen wird."),
      c("defensivstaerke", "Defensivstärke", 2, "Anfällige Defensive mit wenigen Zu-Null-Spielen über die letzten Spielzeiten."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Häufige Trainer- und Systemwechsel verhindern eine klar erkennbare Spielidee."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Wiederholte Umbrüche in der sportlichen Leitung sorgen für spürbare Unruhe."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Zählt zu den Klubs mit den häufigsten Trainerwechseln der letzten Jahre."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Kader wird regelmäßig umgebaut, ohne dass sich ein fester Stamm etabliert."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Große Schwankungen zwischen guten und schwachen Phasen innerhalb einer Saison."),
      c("tabellenkonstanz", "Tabellenkonstanz", 2, "Platzierungen schwanken über die letzten Jahre deutlich zwischen Mittelfeld und Abstiegskampf."),
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
      c("offensivpotenzial", "Offensivpotenzial", 3, "Junge, spielfreudige Offensivspieler sorgen für ansprechende Torgefahr."),
      c("defensivstaerke", "Defensivstärke", 2, "Immer wieder anfällig für individuelle Fehler in der Abwehrreihe."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Offensiv ausgerichteter, mutiger Fußball mit erkennbarer Handschrift des Trainers."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 3, "Nach der Rückkehr in die Liga inzwischen wieder solide und ruhig geführt."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainer mit mehrjähriger Amtszeit und klarer Idee für die Mannschaft."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt über mehrere Spielzeiten weitgehend zusammen."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Junge Mannschaft zeigt noch deutliche Schwankungen zwischen starken und schwachen Auftritten."),
      c("tabellenkonstanz", "Tabellenkonstanz", 3, "Seit dem Wiederaufstieg stabil im gesicherten Mittelfeld etabliert."),
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
      c("offensivpotenzial", "Offensivpotenzial", 2, "Erzielt in den letzten Spielzeiten vergleichsweise wenige Tore im Ligavergleich."),
      c("defensivstaerke", "Defensivstärke", 3, "Meist solide organisierte Abwehr als Basis der letzten Spielzeiten."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Häufige Trainer- und Konzeptwechsel verhindern eine klar wiedererkennbare Spielidee."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Wiederholte Umbrüche in sportlicher Leitung und Kader sorgen für Unruhe im Umfeld."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Mehrere Trainerwechsel in den letzten Jahren ohne langfristige Kontinuität."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Kader wird häufig umgebaut, ohne dass sich ein stabiler Stamm etabliert."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Deutliche Schwankungen zwischen guten und schwachen Phasen innerhalb einer Saison."),
      c("tabellenkonstanz", "Tabellenkonstanz", 3, "Bewegt sich seit Jahren im unteren bis mittleren Tabellenbereich."),
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
      c("offensivpotenzial", "Offensivpotenzial", 2, "Offensive konnte in den letzten Spielzeiten selten konstante Torgefahr entwickeln."),
      c("defensivstaerke", "Defensivstärke", 2, "Anfällige Defensive mit wenigen Zu-Null-Spielen in den letzten Jahren."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Seit dem Ende der erfolgreichen Rose-Ära fehlt eine klar wiedererkennbare Spielidee."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Mehrere Umbrüche in sportlicher Leitung und Kader seit dem Ende der Erfolgsjahre."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Häufige Trainerwechsel ohne die Rückkehr zu langfristiger Kontinuität."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Verlust mehrerer Leistungsträger der Erfolgsjahre erfordert laufenden Kaderumbau."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Deutliche Schwankungen zwischen einzelnen guten Ergebnissen und längeren Formtälern."),
      c("tabellenkonstanz", "Tabellenkonstanz", 2, "Deutlicher Abfall gegenüber den internationalen Plätzen der Vorjahre, Tendenz noch nicht stabilisiert."),
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
      c("offensivpotenzial", "Offensivpotenzial", 2, "Erzielt meist eine überschaubare Anzahl an Toren im Ligavergleich."),
      c("defensivstaerke", "Defensivstärke", 2, "Solide, aber nicht herausragende Defensivleistungen über die letzten Spielzeiten."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Pragmatischer, gut organisierter Fußball mit klarer, wiedererkennbarer Handschrift."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Ruhig und kontinuierlich geführter Klub mit klaren, langfristigen Strukturen."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Vergleichsweise stabile Trainersituation mit klarer Idee für die Mannschaft."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt über mehrere Spielzeiten weitgehend zusammen."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Zeigt über die Saison ein vergleichsweise konstantes, wenn auch limitiertes Niveau."),
      c("tabellenkonstanz", "Tabellenkonstanz", 4, "Seit vielen Jahren zuverlässig im gesicherten Mittelfeld der Liga."),
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
      c("offensivpotenzial", "Offensivpotenzial", 3, "Energiegeladener Offensivfußball sorgt für solide, wenn auch nicht herausragende Torgefahr."),
      c("defensivstaerke", "Defensivstärke", 3, "Aggressives, gut organisiertes Pressing macht die Defensive über weite Strecken stabil."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Laufintensiver, druckvoller Fußball ist klar als Stil des Klubs erkennbar."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Solide, ruhig geführte Vereinsstrukturen mit klarer sportlicher Linie."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainer mit klarer Idee und wachsendem Vertrauen des Vereins."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt über mehrere Spielzeiten weitgehend zusammen."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Zeigt über die Saison meist ein solides, wenn auch nicht immer konstantes Niveau."),
      c("tabellenkonstanz", "Tabellenkonstanz", 3, "Bewegt sich seit Jahren im gesicherten Mittelfeld mit gelegentlichen Ausreißern nach oben."),
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
      c("offensivpotenzial", "Offensivpotenzial", 2, "Offensive konnte zuletzt nur selten konstante Torgefahr entwickeln."),
      c("defensivstaerke", "Defensivstärke", 2, "Die einst prägende defensive Stabilität ist in den letzten Spielzeiten spürbar zurückgegangen."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Die früher klar erkennbare, kompakte Spielidee ist durch mehrere Umbrüche verwässert worden."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Nach Jahren beispielhafter Kontinuität sorgten mehrere Umbrüche zuletzt für spürbare Unruhe."),
      c("trainerstabilitaet", "Trainerstabilität", 1, "Mehrere Trainerwechsel innerhalb kurzer Zeit nach jahrelanger Kontinuität davor."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Abgang mehrerer prägender Spieler erfordert einen umfassenden Kaderumbau."),
      c("leistungskonstanz", "Leistungskonstanz", 1, "Große Schwankungen und ein deutlicher Formeinbruch gegenüber den internationalen Vorjahren."),
      c("tabellenkonstanz", "Tabellenkonstanz", 2, "Starker Abfall von den internationalen Plätzen in Richtung unteres Tabellendrittel."),
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
      c("offensivpotenzial", "Offensivpotenzial", 2, "Begrenzte individuelle Offensivqualität sorgt für vergleichsweise wenige Torchancen."),
      c("defensivstaerke", "Defensivstärke", 2, "Kompakte, kämpferische Defensivarbeit ist die Basis, ohne dabei überragend stabil zu sein."),
      c("spielerischeIdentitaet", "Spielerische Identität", 3, "Kämpferischer, laufintensiver Fußball mit starker Fanunterstützung prägt die klare Identität des Klubs."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 3, "Klar strukturierter, kulturell geprägter Verein mit stabilem Umfeld abseits des reinen Sports."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainerteam mit klarer Idee, die den Aufstieg und die erste Bundesliga-Saison geprägt hat."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Als Aufsteiger mit begrenztem Budget muss der Kader nach jeder Saison neu zusammengestellt werden."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Als kleinerer Kader anfälliger für Leistungsschwankungen über eine lange Saison."),
      c("tabellenkonstanz", "Tabellenkonstanz", 1, "Noch keine mehrjährige Bundesliga-Historie, Tabellenplatzierung daher schwer einzuschätzen."),
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
      c("offensivpotenzial", "Offensivpotenzial", 2, "Zweitliga-erprobter Kader mit überschaubarer individueller Qualität für die höhere Klasse."),
      c("defensivstaerke", "Defensivstärke", 2, "Solide Zweitliga-Defensive, deren Stabilität sich in der Bundesliga erst beweisen muss."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Die wiederkehrenden Auf- und Abstiege erschweren eine über Jahre wiedererkennbare Spielidee."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Historisch geprägt von häufiger Unruhe und wechselnden sportlichen Verantwortlichen."),
      c("trainerstabilitaet", "Trainerstabilität", 2, "Trainerposition war in der Klubgeschichte selten über mehrere Jahre konstant besetzt."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Aufstiegskader wird für die Bundesliga punktuell verstärkt, was Eingewöhnungszeit braucht."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Als typischer Aufsteiger sind größere Leistungsschwankungen über die Saison wahrscheinlich."),
      c("tabellenkonstanz", "Tabellenkonstanz", 1, "Klassischer Fahrstuhlklub mit starken Schwankungen der Platzierung über mehrere Jahre."),
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
      c("offensivpotenzial", "Offensivpotenzial", 2, "Zweitliga-erprobte Offensive, deren Durchschlagskraft sich in der höheren Klasse erst zeigen muss."),
      c("defensivstaerke", "Defensivstärke", 2, "Solide Zweitliga-Defensive als Basis des Aufstiegs, Bundesliga-Tauglichkeit noch ungetestet."),
      c("spielerischeIdentitaet", "Spielerische Identität", 2, "Nach Jahren in der zweiten Liga muss sich eine für die Bundesliga tragfähige Spielidee erst etablieren."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 2, "Nach Jahren der Unruhe in der zweiten Liga zuletzt spürbar stabiler geführt, Bundesliga-Bewährungsprobe steht aber noch aus."),
      c("trainerstabilitaet", "Trainerstabilität", 3, "Trainer hat den Aufstieg begleitet und genießt entsprechendes Vertrauen für die erste Bundesliga-Saison."),
      c("kaderkontinuitaet", "Kaderkontinuität", 2, "Aufstiegskader wird für die Bundesliga punktuell verstärkt, was Eingewöhnungszeit erfordert."),
      c("leistungskonstanz", "Leistungskonstanz", 2, "Als Aufsteiger mit fehlender Erstliga-Erfahrung sind größere Schwankungen wahrscheinlich."),
      c("tabellenkonstanz", "Tabellenkonstanz", 1, "Keine Bundesliga-Historie seit einer Generation, Einordnung ist entsprechend unsicher."),
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
      c("offensivpotenzial", "Offensivpotenzial", 2, "Überschaubare individuelle Offensivqualität, die durch Laufbereitschaft kompensiert wird."),
      c("defensivstaerke", "Defensivstärke", 3, "Sehr diszipliniertes, kompaktes Defensivverhalten als Basis des Liga-Verbleibs."),
      c("spielerischeIdentitaet", "Spielerische Identität", 4, "Sehr klare, seit Jahren gleichbleibende taktische Handschrift des langjährigen Trainers."),
    ]),
    cat("stabilitaet", "Stabilität & Prognosesicherheit", [
      c("vereinsstabilitaet", "Vereinsstabilität", 4, "Über Jahrzehnte konstant und mit klarer Entwicklungslinie von der Regionalliga bis in die Bundesliga geführt."),
      c("trainerstabilitaet", "Trainerstabilität", 5, "Einer der am längsten amtierenden Trainer im europäischen Profifußball, seit vielen Jahren im Amt."),
      c("kaderkontinuitaet", "Kaderkontinuität", 3, "Kern der Mannschaft bleibt trotz begrenztem Budget über mehrere Spielzeiten weitgehend zusammen."),
      c("leistungskonstanz", "Leistungskonstanz", 3, "Zeigt für einen kleinen Kader ein bemerkenswert konstantes Leistungsniveau."),
      c("tabellenkonstanz", "Tabellenkonstanz", 3, "Seit dem Aufstieg zuverlässig im gesicherten Mittelfeld etabliert."),
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
