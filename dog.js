"use strict"


class Dogs{
    constructor(data){
        Object.assign(this, data)
    }

    setMatchStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogHtml(){
        const { name, avatar, age, bio } = this
        return `
            <div class ="mainProfile">
                <div class="profile-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="ProfilePic" src="${avatar}">                      
            </div>
        `
    }
}

export default Dogs