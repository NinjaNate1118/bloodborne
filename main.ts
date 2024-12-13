controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    The_Hunter,
    [img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . c 4 4 4 c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . . b f f f f f b . . . . 
        . . . . b b f f f f f b b . . . 
        . . . b b b f f f f f b b b . . 
        . . . . b f f f f f f f b b . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . c 4 4 4 c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . . b f f f f f b . . . . 
        . . . . b b f f f f f b b . . . 
        . . . b b b f f f f f b b b . . 
        . . . . b f f f f f f f b b b . 
        . . . . . f f f f f f f . b . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . c 4 4 4 c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . . b f f f f f b . . . . 
        . . . . b b f f f f f b b . . . 
        . . . b b b f f f f f b b b . . 
        . . . . b f f f f f f f b b . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . c 4 4 4 c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . . b f f f f f b . . . . 
        . . . . b b f f f f f b b . . . 
        . . . b b b f f f f f b b b . . 
        . . . b b f f f f f f f b . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . c 4 4 4 c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . . b f f f f f b . . . . 
        . . . . b b f f f f f b b . . . 
        . . . b b b f f f f f b b b . . 
        . . b b b f f f f f f f b . . . 
        . . . b . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . c 4 4 4 c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . . b f f f f f b . . . . 
        . . . . b b f f f f f b b . . . 
        . . . b b b f f f f f b b b . . 
        . . . b b f f f f f f f b . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . c 4 4 4 c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . . b f f f f f b . . . . 
        . . . . b b f f f f f b b . . . 
        . . . b b b f f f f f b b b . . 
        . . . . b f f f f f f f b . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . f f . f f . . . . . 
        `],
    65,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(25)
    Beast.follow(The_Hunter, 150)
    animation.runImageAnimation(
    The_Hunter,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . b f f e f f b . . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . e f f e f f e . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c e . . . 
        . . . . . b f d e d f b e . . . 
        . . . . . b f f e f f b b . . . 
        . . . . . b f d e d f . . . . . 
        . . . . . e f f e f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c e . . . . 
        . . . . . c c c c c e e e . . . 
        . . . . c c f f e f f c b . . . 
        . . . . . b f d e d f b b . . . 
        . . . . . b f f e f f b b . . . 
        . . . . . b f d e d f . . . . . 
        . . . . . e f f e f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f 2 2 e . . . 
        . . . . . c c c c c c c b . . . 
        . . . . c c f f e f f c b . . . 
        . . . . . b f d e d f b b . 5 . 
        . . . . . b f f e f f b b . . . 
        . . . 5 . b f d e d f . . . . . 
        . . . . . e f f e f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . 5 . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . 2 2 . . 5 
        . . . . . . c f f f 2 2 e . . . 
        . . . . . c c c c c c e b . . . 
        . . . . c c f f e f f c b . . . 
        . 5 . . . b f d e d f b b . 5 . 
        . . . . . b f f e f f b b . . . 
        . . . 5 . b f d e d f . . . . . 
        . . . . . e f f e f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . 5 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . 5 . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c e . . . 
        . . . . . b f d e d f b e . 5 . 
        . . . . . b f f e f f b b . . . 
        . . . . . b f d e d f . . . . . 
        . . . . . e f f e f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . 5 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . 5 . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . b f f e f f b b . . . 
        . . . . . b f d e d f . . . . . 
        . . . . . e f f e f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . b f f e f f b . . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . e f f e f f e . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . b f f e f f b . . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . e f f e f f e . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . b f f e f f b . . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . e f f e f f e . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `],
    100,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        . . . . . . . 2 5 4 5 . . 5 . . 
        . . . . . . 2 5 4 4 4 2 . . . . 
        . . . . . 5 2 4 5 5 4 4 . . . . 
        . . . . . . 2 4 5 5 4 2 . . . . 
        . . . . . . 5 4 4 4 4 5 . . . . 
        . . . . . . . 2 2 5 2 . . . . . 
        . . . . 5 . . . . . . . . . . . 
        . . . . . . . . . . . 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `, The_Hunter, 50, 50)
    projectile.follow(Beast, 200)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    The_Hunter,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . b f f e f f b . . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . e f f e f f e . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    The_Hunter,
    assets.animation`myAnim0`,
    65,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    The_Hunter,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . b f f e f f b . . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . e f f e f f e . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    The_Hunter,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . b f f e f f b . . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . e f f e f f e . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `],
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    The_Hunter,
    assets.animation`myAnim`,
    65,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    The_Hunter,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . b f f e f f b . . . . 
        . . . . . b f d e d f b . . . . 
        . . . . . e f f e f f e . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `],
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    The_Hunter,
    [img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . b b f d e d f b . . . . 
        . . . . e b f f e f f . b . . . 
        . . . . e . f d e d f . e . . . 
        . . . . . f f f e f f f e . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . e b f d e d f b . . . . 
        . . . . e b f f e f f . b . . . 
        . . . . . . f d e d f . b . . . 
        . . . . . f f f e f f f e . . . 
        . . . . . f f e e e f f e . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . b b f d e d f b . . . . 
        . . . . e b f f e f f . b . . . 
        . . . . e . f d e d f . e . . . 
        . . . . . f f f e f f f e . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b b . . . 
        . . . . b . f f e f f b e . . . 
        . . . . e . f d e d f . e . . . 
        . . . . e f f f e f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b e . . . 
        . . . . b . f f e f f b e . . . 
        . . . . b . f d e d f . . . . . 
        . . . . e f f f e f f f . . . . 
        . . . . e f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . c f f f c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . c c f f e f f c c . . . 
        . . . . . b f d e d f b b . . . 
        . . . . b . f f e f f b e . . . 
        . . . . e . f d e d f . e . . . 
        . . . . e f f f e f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f e e e f f . . . . 
        . . . . . . e e . e e . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . . . . f f . . . . . 
        `],
    65,
    true
    )
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "YOU DIED")
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    game.setGameOverMessage(true, "Prey Slaughtered")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Beast.z += -1
    sprites.destroy(projectile, effects.none, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Beast.follow(The_Hunter, 50)
    info.changeLifeBy(-0.0001)
})
let projectile: Sprite = null
let Beast: Sprite = null
let The_Hunter: Sprite = null
The_Hunter = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . c f f f c . . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . c c f f e f f c c . . . 
    . . . . . b f d e d f b . . . . 
    . . . . . b f f e f f b . . . . 
    . . . . . b f d e d f b . . . . 
    . . . . . e f f e f f e . . . . 
    . . . . . f f e e e f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f e e e f f . . . . 
    . . . . . . e e . e e . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . f f f . f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(The_Hunter, 100, 100)
scene.cameraFollowSprite(The_Hunter)
Beast = sprites.create(img`
    . . f f f f . . . . f . . . . . 
    . . f f f f . f f . . f . . . . 
    f f f 2 f f f . . f . f . . . f 
    f f 2 f f f f f f f f . . f . . 
    f f f f f f f f . f f . . f . . 
    f f f f f f f f f f f f f . . . 
    . . f f f f f f f f f . . . . . 
    . . . f f f f f f f f f . . . . 
    . f f f f f f f f f f f f . . . 
    . f f f f f f f f f f f f f . . 
    . . f f f f . f f f f f f . . . 
    . . f f f . . . . f f f f . . . 
    . . . f f . . . . f f f f . . . 
    . . . . . . . . . f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
info.setLife(100)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(Beast, sprites.dungeon.doorClosedWest)
Beast.z = 10
The_Hunter.z = 50
