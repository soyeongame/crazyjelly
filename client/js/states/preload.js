class Preload extends Phaser.State {

  preload() {
    // Menu:
    this.load.image('main_menu',     'images/menu/main_menu.png');
    this.load.image('slot_backdrop', 'images/menu/slot_backdrop.png');

    this.load.spritesheet('buttons',    'images/menu/buttons.png', 200, 75);
    this.load.spritesheet('check_icon', 'images/menu/accepts.png', 75, 75);
    this.load.spritesheet('list_icon',  'images/menu/game_enter.png', 75, 75);

    this.load.image('hot_map_preview',  'images/menu/hot_map_preview.png');
    this.load.image('cold_map_preview', 'images/menu/cold_map_preview.png');
    this.load.image('prev',             'images/menu/left_arrow.png');
    this.load.image('next',             'images/menu/right_arrow.png');

    // Map:
    this.load.image('tiles',      'maps/tileset.png');
    this.load.tilemap('hot_map',  'maps/hot_map.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('cold_map', 'maps/cold_map.json', null, Phaser.Tilemap.TILED_JSON);


    // Game:
    this.load.spritesheet('explosion_center',     'images/game/explosion_center.png',     35, 35);
    this.load.spritesheet('explosion_horizontal', 'images/game/explosion_horizontal.png', 35, 35);
    this.load.spritesheet('explosion_vertical',   'images/game/explosion_vertical.png',   35, 35);
    this.load.spritesheet('explosion_up',         'images/game/explosion_up.png',         35, 35);
    this.load.spritesheet('explosion_right',      'images/game/explosion_right.png',      35, 35);
    this.load.spritesheet('explosion_down',       'images/game/explosion_down.png',       35, 35);
    this.load.spritesheet('explosion_left',       'images/game/explosion_left.png',       35, 35);

    this.load.spritesheet('spoil_tileset', 'images/game/spoil_tileset.png', 35, 35);
    this.load.spritesheet('bone_tileset',  'images/game/bone_tileset.png', 35, 35);
    this.load.spritesheet('bomb_tileset',  'images/game/bombs.png', 35, 35);

    this.load.image('speed_up_bonus',    'images/game/speed_up_bonus.png');
    this.load.image('speed_up_no_bonus', 'images/game/speed_up_no_bonus.png');
    this.load.image('delay_up_bonus',    'images/game/delay_up_bonus.png');
    this.load.image('delay_up_no_bonus', 'images/game/delay_up_no_bonus.png');
    this.load.image('power_up_bonus',    'images/game/power_up_bonus.png');

    this.load.image('placeholder_power', 'images/game/placeholder_power.png');
    this.load.image('placeholder_speed', 'images/game/placeholder_speed.png');
    this.load.image('placeholder_time',  'images/game/placeholder_time.png');

    // Skins:
    this.load.image('bomberman_head_blank',     'images/game/chars/0-face.png');

    this.load.image('bomberman_head_윈디',  'images/game/chars/1-face.png');
    this.load.image('bomberman_head_학계정설',     'images/game/chars/2-face.png');
    this.load.image('bomberman_head_오마이갓',  'images/game/chars/3-face.png');
    this.load.image('bomberman_head_덤디덤디',    'images/game/chars/4-face.png');
    this.load.image('bomberman_head_선장님',    'images/game/chars/5-face.png');
    this.load.image('bomberman_head_JSY엔터대표',     'images/game/chars/6-face.png');
    this.load.image('bomberman_head_아자사자',     'images/game/chars/7-face.png');
    this.load.image('bomberman_head_연하공주',     'images/game/chars/8-face.png');
    this.load.image('bomberman_head_천진반',   'images/game/chars/9-face.png');
    this.load.image('bomberman_head_힙합꾸러기',    'images/game/chars/10-face.png');
    this.load.image('bomberman_head_낭만땃쥐',     'images/game/chars/11-face.png');

    this.load.spritesheet('bomberman_윈디',  'images/game/chars/1-preview.png', 32, 32);
    this.load.spritesheet('bomberman_학계정설',     'images/game/chars/2-preview.png', 32, 32);
    this.load.spritesheet('bomberman_오마이갓',  'images/game/chars/3-preview.png', 32, 32);
    this.load.spritesheet('bomberman_덤디덤디',    'images/game/chars/4-preview.png', 32, 32);
    this.load.spritesheet('bomberman_선장님',    'images/game/chars/5-preview.png', 32, 32);
    this.load.spritesheet('bomberman_JSY엔터대표',     'images/game/chars/6-preview.png', 32, 32);
    this.load.spritesheet('bomberman_아자사자',     'images/game/chars/7-preview.png', 32, 32);
    this.load.spritesheet('bomberman_연하공주',     'images/game/chars/8-preview.png', 32, 32);
    this.load.spritesheet('bomberman_천진반',   'images/game/chars/9-preview.png', 32, 32);
    this.load.spritesheet('bomberman_힙합꾸러기',    'images/game/chars/10-preview.png', 32, 32);
    this.load.spritesheet('bomberman_낭만땃쥐',     'images/game/chars/11-preview.png', 32, 32);
  }

  create() {
    this.state.start('Menu');
  }
}

export default Preload;
