const badbutton = document.getElementById('notouching')
const TOOCLOSE = 100

// If there is a problem use : console.log(x, y)


badbutton.addEventListener('click', () => {

    // Guess he found out that he can TAB Lmao
    alert('Good one :/')
    window.location.href = 'Website.htm';
})
function distancefrombuttoncenter(boxPosition, mousePosition, boxSize){

    //EZ : Calc distance of mouse and Button
    return boxPosition - mousePosition + boxSize / 2
}
document.addEventListener('mousemove', (e) => {

    // Position Of Mouse X/Y
    const x = e.pageX
    const y = e.pageY

    // Position Of Button X/Y
    const buttonBox = badbutton.getBoundingClientRect()
     
    const hdistance = distancefrombuttoncenter(buttonBox.x, x, buttonBox.width)
    const vdistance = distancefrombuttoncenter(buttonBox.y, y, buttonBox.height)

    // When To Move the Button
    const hmove = buttonBox.width / 2 + TOOCLOSE
    const vmove = buttonBox.height / 2 + TOOCLOSE

    // Check Distance (Close??)
    if(Math.abs(hdistance) <= hmove && Math.abs(vdistance) <= vmove){
        setButtonPosition(
            buttonBox.x + hmove / hdistance * 10,
            buttonBox.y + vmove / vdistance * 10,
        )
    }
})
function setButtonPosition(left , top){
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = badbutton.getBoundingClientRect()

    // Might Clip into the void lmao
    // We Gotta sent that the other way around then :/
    if(distancefrombuttoncenter(left, windowBox.left, buttonBox.width) < 0 ){
        left = windowBox.right - buttonBox.width - TOOCLOSE
    }
    if(distancefrombuttoncenter(left, windowBox.right, buttonBox.width) > 0 ){
        left = windowBox.left + TOOCLOSE
    }
    if(distancefrombuttoncenter(top, windowBox.top, buttonBox.height) < 0 ){
        top = windowBox.bottom - buttonBox.height - TOOCLOSE
    }
    if(distancefrombuttoncenter(top, windowBox.bottom, buttonBox.height) > 0 ){
        top = windowBox.top + TOOCLOSE
    }

    badbutton.style.left = `${left}px`
    badbutton.style.top = `${top}px`

}
