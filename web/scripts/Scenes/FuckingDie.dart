import "dart:html";
import "../SBURBSim.dart";

//that's it, i'm syncing hp to death status and that's FINAL.

class FuckingDie extends Scene {
    bool canRepeat = true;
    FuckingDie(Session session): super(session, false);
    List<Player> futureCorpses = new List<Player>();


    @override
    bool trigger(List<Player> playerList){
        futureCorpses.clear();
        for(Player p in session.players) {
            if(p.getStat(Stats.CURRENT_HEALTH) <= 0 && !p.dead) {
                futureCorpses.add(p);
            }
        }
        return futureCorpses.isNotEmpty;
    }



    @override
    void renderContent(Element div){
        session.logger.info("${turnArrayIntoHumanSentence(futureCorpses)} just fucking died out of nowhere. This BETTER not be common.");
        
        List<String> deadNames = new List<String>();
        for(Player p in futureCorpses) {
            deadNames.add(p.htmlTitleBasic());
            p.makeDead("Probably Doom Shit, I don't even know.");
        }
        String ret = "Holy shit, the ${turnArrayIntoHumanSentence(deadNames)} just died out of fucking nowhere. I can't even tell what happened? Was it game shit? A glitch? A Doom player? We are all confused and upset that this happened and vow to pester JR until it stops from keep hapening so often. You guess it happening occasionally might be kind of funny, though.";

        appendHtml(div,ret);
    }
}
