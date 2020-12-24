import React from 'react';
import spotifyIcon from "../../assets/Spotify_Icon.png";
import instagramIcon from "../../assets/Instagram_Icon.png";
import facebookIcon from "../../assets/Facebook_Icon.png";

function Socials() {

    return (
        <div className="d-flex flex-wrap justify-content-center">
            <a className="mb-5" href="https://open.spotify.com/artist/0zBEmDtb9oACxyvTjKsAOV" target="blank">
                <img className="logo mx-5" src={spotifyIcon} alt="spotify logo" key="spotify-logo" />
            </a>
            <a className="mb-5" href="https://www.instagram.com/somethinglikeseduction/" target="blank">
                <img className="logo mx-5" src={instagramIcon} alt="instagram logo" key="instagram-logo" />
            </a>
            <a className="mb-5" href="https://www.facebook.com/slseduction" target="blank">
                <img className="logo mx-5" src={facebookIcon} alt="facebook logo" key="facebook-logo" />
            </a>
        </div>
    );
}

export default Socials;