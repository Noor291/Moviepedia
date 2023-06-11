import React from 'react'
import DefaultLayout from '../layout/default.layout'
//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from '../PlayFilters/PlayFilters.Component';

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full  flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Plays in Delhi-NCR </h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <a
                href="https://in.bookmyshow.com/plays/natya-kutumbh-festival/ET00359453"
                target="_blank"
                rel="noreferrer">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMSBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00359453-gnqjnuksbl-portrait.jpg"
                  title="Natya Kumbh Festival"
                  subtitle="Drama | English, Hindi"
                />
                </a>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <a
                href="https://in.bookmyshow.com/plays/piya-behrupiya-delhi/ET00360064"
                target="_blank"
                rel="noreferrer">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360064-vuytscypgh-portrait.jpg"
                  title="Piya Behrupiya - Delhi"
                  subtitle="Drama | Hindi | 2hrs 15mins"
                />
                </a>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <a
                href="https://in.bookmyshow.com/plays/the-f-word/ET00360216"
                target="_blank"
                rel="noreferrer">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360216-ammzwydaxh-portrait.jpg"
                  title="The F Word"
                  subtitle="Drama | English | 1hr 15mins"
                />
                </a>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <a
                href="https://in.bookmyshow.com/plays/i-am-from-delhi-bihar/ET00361238"
                target="_blank"
                rel="noreferrer">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361238-cgyrctfqkp-portrait.jpg"
                  title="I am from Delhi (Bihar) "
                  subtitle="Classic | 1hr 30mins"
                />
                </a>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <a
                href="https://in.bookmyshow.com/plays/didi-ias/ET00358763"
                target="_blank"
                rel="noreferrer">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMSBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358763-ykakqlvfve-portrait.jpg"
                  title="Didi IAS"
                  subtitle="Comedy | Hindi, English | 7yrs + | 1hr"
                />
                </a>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <a
                href="https://in.bookmyshow.com/plays/natya-kutumbh-festival/ET00359453"
                target="_blank"
                rel="noreferrer">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361438-uuetqclusp-portrait.jpg"
                  title="Hamlet (Tragic Drama)"
                  subtitle="Drama | Hindi | 12yrs + | 1hr 15mins"
                />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilters
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
        </div>
        {/* 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31104.23539200534!2d77.61554!3d12.969969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c80b1ca7533de73!2zMTLCsDU4JzExLjkiTiA3N8KwMzYnNTUuOSJF!5e0!3m2!1sen!2sus!4v1663427476353!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="play location"
        ></iframe> */}
      </div>
    </>
  );
};

export default DefaultLayout(PlayPage);