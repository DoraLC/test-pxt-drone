radio.onReceivedString(function (receivedString) {
    if (receivedString == "start") {
        drone.prepared()
        basic.showIcon(IconNames.Yes)
    } else if (receivedString == "end") {
        drone.end_section()
        basic.showIcon(IconNames.No)
    } else if (receivedString == "S") {
        drone.Action(movement.stay)
    } else if (receivedString == "Q") {
        drone.take_off()
    } else if (receivedString == "J") {
        drone.land()
    } else if (receivedString == "F") {
        drone.Action(movement.forward)
    } else if (receivedString == "B") {
        drone.Action(movement.backward)
    } else if (receivedString == "L") {
        drone.Action(movement.right)
    } else if (receivedString == "R") {
        drone.Action(movement.left)
    } else if (receivedString == "U") {
        drone.Action(movement.up)
    } else if (receivedString == "D") {
        drone.Action(movement.down)
    }
})
radio.setGroup(99)
basic.showIcon(IconNames.Heart)
