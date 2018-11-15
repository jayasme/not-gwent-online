module.exports = {

  "agile": {
    name: "agile",
    description: "敏捷：可被放置在近战或远程行中。一旦放置后不可移动。",
    cancelPlacement: true,
    onBeforePlace: function(card){
      var self = this;
      this.send("played:agile", {cardID: card.getID()}, true);
      this.on("agile:setField", function(type){
        self.off("agile:setField");
        card.changeType(type)
        self.placeCard(card, {
          disabled: true
        });
        self.hand.remove(card);
      })
    }
  },
  "medic": {
    name: "medic",
    description: "医疗：立刻从弃牌堆中选择一张卡复活（英雄或特殊卡除外）。",
    waitResponse: true,
    onAfterPlace: function(card){
      var discard = this.getDiscard();

      discard = this.filter(discard, {
        "ability": "hero",
        "type": [card.constructor.TYPE.SPECIAL, card.constructor.TYPE.WEATHER]
      })

      this.send("played:medic", {
        cards: JSON.stringify(discard)
      }, true);

      this.sendNotificationTo(this.foe, this.getName() + " 从弃牌堆中选择一张牌。")
    }
  },
  "morale_boost": {
    name: "morale_boost",
    description: "士气提升：给同行所有单位+1点数，自己除外。",
    onEachCardPlace: function(card){
      var field = this.field[card.getType()];
      var id = card.getID();
      if(!field.isOnField(card)){
        field.get().forEach(function(_card){
          if(_card.getID() == id) return;
          if(_card.hasAbility("hero")) return;
          if(_card.getType() != card.getType()) return;
          _card.setBoost(id, 0);
        })
        this.off("EachCardPlace", card.getUidEvents("EachCardPlace"));
        return;
      }

      field.get().forEach(function(_card){
        if(_card.getID() == id) return;
        if(_card.hasAbility("hero")) return;
        if(_card.getType() != card.getType()) return;
        _card.setBoost(id, 1);
      })
    }
  },
  "muster": {
    name: "muster",
    description: "捆绑：将所有抽牌堆和手牌中同类型的卡牌立刻放置在战场中。",
    onAfterPlace: function(card){
      var musterType = card.getMusterType();
      var self = this;

      var cardsDeck = this.deck.find("musterType", musterType);
      var cardsHand = this.hand.find("musterType", musterType);

      cardsDeck.forEach(function(_card){
        if(_card.getID() === card.getID()) return;
        self.deck.removeFromDeck(_card);
        self.placeCard(_card, {
          suppress: "muster"
        });
      })
      cardsHand.forEach(function(_card){
        if(_card.getID() === card.getID()) return;
        self.hand.remove(_card);
        self.placeCard(_card, {
          suppress: "muster"
        });
      })
    }
  },
  "tight_bond": {
    name: "tight_bond",
    description: "绑定：放置在同名卡牌旁边可使两者点数翻倍。",
    tightBond: true
  },
  "spy": {
    name: "spy",
    description: "间谍：放置在对手的战场中（但会给对方增加点数），然后摸取两张牌。",
    changeSide: true,
    onAfterPlace: function(){
      this.draw(2);
      this.sendNotification(this.getName() + " 使用了间谍！摸2张牌。")
    }
  },
  "weather_fog": {
    name: "weather_fog",
    description: "大雾：使双方玩家的所有远程单位点数变为1。",
    weather: 1/*,
    onEachTurn: function(card){
      var targetRow = card.constructor.TYPE.RANGED;
      var forcedPower = 1;
      var field1 = this.field[targetRow].get();
      var field2 = this.foe.field[targetRow].get();

      var field = field1.concat(field2);

      field.forEach(function(_card){
        if(_card.getRawAbility() == "hero") return;
        _card.setForcedPower(forcedPower);
      });
    },
    onEachCardPlace: function(card){
      var targetRow = card.constructor.TYPE.RANGED;
      var forcedPower = 1;
      var field1 = this.field[targetRow].get();
      var field2 = this.foe.field[targetRow].get();

      var field = field1.concat(field2);

      field.forEach(function(_card){
        if(_card.getRawAbility() == "hero") return;
        _card.setForcedPower(forcedPower);
      });
    }*/
  },
  "weather_rain": {
    name: "weather_rain",
    description: "暴雨：使双方玩家的所有攻城单位点数变为1。",
    weather: 2
    /*onEachTurn: function(card){
      var targetRow = card.constructor.TYPE.SIEGE;
      var forcedPower = 1;
      var field1 = this.field[targetRow].get();
      var field2 = this.foe.field[targetRow].get();

      var field = field1.concat(field2);

      field.forEach(function(_card){
        if(_card.getRawAbility() == "hero") return;
        _card.setForcedPower(forcedPower);
      });
    },
    onEachCardPlace: function(card){
      var targetRow = card.constructor.TYPE.SIEGE;
      var forcedPower = 1;
      var field1 = this.field[targetRow].get();
      var field2 = this.foe.field[targetRow].get();

      var field = field1.concat(field2);

      field.forEach(function(_card){
        if(_card.getRawAbility() == "hero") return;
        _card.setForcedPower(forcedPower);
      });
    }*/
  },
  "weather_frost": {
    name: "weather_frost",
    description: "霜冻：使双方玩家的所有近战单位点数变为1。",
    weather: 0
    /*
      onEachTurn: function(card){
        var targetRow = card.constructor.TYPE.CLOSE_COMBAT;
        var forcedPower = 1;
        var field1 = this.field[targetRow].get();
        var field2 = this.foe.field[targetRow].get();

        var field = field1.concat(field2);

        field.forEach(function(_card){
          if(_card.getRawAbility() == "hero") return;
          _card.setForcedPower(forcedPower);
        });
      },
      onEachCardPlace: function(card){
        var targetRow = card.constructor.TYPE.CLOSE_COMBAT;
        var forcedPower = 1;
        var field1 = this.field[targetRow].get();
        var field2 = this.foe.field[targetRow].get();

        var field = field1.concat(field2);

        field.forEach(function(_card){
          if(_card.getRawAbility() == "hero") return;
          _card.setForcedPower(forcedPower);
        });
      }*/
  },
  "weather_clear": {
    name: "weather_clear",
    description: "移除所有天气卡牌（霜冻、暴雨及大雾）。",
    weather: 5
    /*onAfterPlace: function(card){
      var targetRow = card.constructor.TYPE.WEATHER;
      var field = this.field[targetRow];
      field.removeAll();

      for(var i = card.constructor.TYPE.CLOSE_COMBAT; i < card.constructor.TYPE.SIEGE; i++) {
        var _field1, _field2, _field;
        _field1 = this.field[i].get();
        _field2 = this.foe.field[i].get();
        _field = _field1.concat(_field2);

        _field.forEach(function(_card){
          if(_card.getRawAbility() == "hero") return;
          _card.setForcedPower(-1);
        });
      }

    }*/
  },
  "decoy": {
    name: "decoy",
    description: "诱饵：将己方战场中的一张牌替换回自己手中。",
    replaceWith: true
  },
  "scorch_card": {
    name: "scorch",
    description: "灼烧：摧毁双方战场上点数最高的卡牌。",
    scorch: true,
    removeImmediately: true,
    nextTurn: true
  },
  "scorch": {
    name: "scorch",
    description: "灼烧: 如果敌人近战行中有大于或等于10的单位，摧毁其中点数最高的那张牌。",
    scorchMelee: true
  },
  "commanders_horn": {
    name: "commanders_horn",
    description: "战斗号角：使一行中的所有单位点数翻倍。",
    commandersHorn: true
  },
  "commanders_horn_card": {
    name: "commanders_horn",
    description: "战斗号角：使一行中的所有单位点数翻倍。",
    cancelPlacement: true,
    commandersHorn: true,
    isCommandersHornCard: true
  },
  "foltest_leader1": {
    name: "",
    description: "",
    onActivate: function(){
      var cards = this.deck.find("key", "impenetrable_fog")
      if(!cards.length) return;
      var card = this.deck.removeFromDeck(cards[0]);
      this.placeCard(card);
    }
  },
  "foltest_leader2": {
    name: "",
    description: "",
    onActivate: function(){
      this.setWeather(5);
    }
  },
  "foltest_leader3": {
    name: "",
    description: "使所有攻城单位的点数翻倍，除非已经有战斗号角在生效。",
    onActivate: function(){
      this.setHorn("commanders_horn", 2);
    }
  },
  "foltest_leader4": {
    name: "",
    description: "",
    onActivate: function(){
      //scorch siege
    }
  },
  "francesca_leader1": {
    name: "",
    description: "",
    onActivate: function(){
      var cards = this.deck.find("key", "biting_frost")
      if(!cards.length) return;
      var card = this.deck.removeFromDeck(cards[0]);
      this.placeCard(card);
    }
  },
  "francesca_leader2": {
    name: "Francesca Findabair the Beautiful",
    description: "使所有远程单位的点数翻倍，除非已经有战斗号角在生效。",
    onActivate: function(){
      this.setHorn("commanders_horn", 1);
    }
  },
  "francesca_leader3": {
    name: "",
    description: "",
    onActivate: function(){
    }
  },
  "francesca_leader4": {
    name: "",
    description: "",
    onActivate: function(){
    }
  },
  "eredin_leader1": {
    name: "",
    description: "",
    onActivate: function(){
    }
  },
  "eredin_leader2": {
    name: "",
    description: "",
    onActivate: function(){
    }
  },
  "eredin_leader3": {
    name: "",
    description: "",
    onActivate: function(){

    }
  },
  "eredin_leader4": {
    name: "Eredin King of the Wild Hunt",
    description: "使所有近战单位的点数翻倍，除非已经有战斗号角在生效。",
    onActivate: function(){
      this.setHorn("commanders_horn", 0);
    }
  },
  "emreis_leader4": {
    name: "Emhyr vas Emreis the Relentless",
    description: "从对手的弃牌堆中摸取一张牌。",
    waitResponse: true,
    onActivate: function(card){
      var discard = this.foe.getDiscard();

      discard = this.filter(discard, {
        "ability": "hero",
        "type": [card.constructor.TYPE.SPECIAL, card.constructor.TYPE.WEATHER]
      })

      this.send("played:emreis_leader4", {
        cards: JSON.stringify(discard)
      }, true);
    }
  },
  "hero": {
    name: "hero",
    description: "英雄：不受任何特殊卡牌、天气卡牌和其它效果影响。"
  }
}