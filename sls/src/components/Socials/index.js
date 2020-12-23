import React from 'react';
import spotifyIcon from "../../assets/Spotify_Icon.png";
import instagramIcon from "../../assets/Instagram_Icon.png";
import facebookIcon from "../../assets/Facebook_Icon.png";
// add a little something to commit

function Socials() {

    return (
        <div>
            <a href="https://open.spotify.com/artist/0zBEmDtb9oACxyvTjKsAOV" target="blank">
                <img className="logo mx-5" src={spotifyIcon} alt="spotify logo" key="spotify-logo" />
            </a>
            <a href="https://www.instagram.com/somethinglikeseduction/" target="blank">
                <img className="logo mx-5" src={instagramIcon} alt="instagram logo" key="instagram-logo" />
            </a>
            <a href="https://www.facebook.com/slseduction" target="blank">
                <img className="logo mx-5" src={facebookIcon} alt="facebook logo" key="facebook-logo" />
            </a>
        </div>
    );
}

export default Socials;