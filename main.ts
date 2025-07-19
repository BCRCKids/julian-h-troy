controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roby.isHittingTile(CollisionDirection.Bottom)) {
        roby.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let roby: Sprite = null
tiles.setTilemap(tilemap`level1`)
roby = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . 2 3 2 2 3 . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a a a 1 a a a . . . . . . 
    . . . 9 2 . . . 9 2 . . . . . . 
    . . . 2 9 . . . 2 9 . . . . . . 
    . . . 9 2 . . . 9 2 . . . . . . 
    . . . 2 9 . . . 2 9 . . . . . . 
    . . . 9 2 . . . 9 2 . . . . . . 
    . . . 2 9 . . . 2 9 . . . . . . 
    . . 2 9 2 2 . 2 9 2 2 . . . . . 
    . . . 2 9 . . . 2 9 . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(roby, tiles.getTileLocation(0, 5))
roby.ay = 500
controller.moveSprite(roby, 100, 0)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddddddb.....
        .c5555dddbb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `, randint(-100, 0), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
