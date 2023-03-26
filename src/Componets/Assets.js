import React from "react";
import "./Assets.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";
import Icons from "../Images/icons.png";

const Assets = () => {
  let assets = [
    {
      asset_id: 18883,
      asset_title: "Technical Project Management",
      asset_description:
        "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
      asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
      asset_type: "display_asset",
      asset_content_type: "video",
    },
    {
      asset_id: 18884,
      asset_title: "Threadbuild",
      asset_description:
        "Watch the video and thread build, and jot out key threads while watching that video.",
      asset_content: " ",
      asset_type: "input_asset",
      asset_content_type: "threadbuilder",
    },
    {
      asset_id: 18885,
      asset_title: "Structure you pointers ",
      asset_description:
        "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
      asset_content: " ",
      asset_type: "input_asset",
      asset_content_type: "article",
    },
    {
      asset_id: 18886,
      asset_title: "4SA Method",
      asset_description: "To explore more read more",
      asset_content:
        " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
      asset_type: "display_asset",
      asset_content_type: "article",
    },
  ];
  return (
    <div className="container">
      {assets.map((asset) => {
        return (
          <div className="asset" key={asset.asset_id}>
            <div className="assetTitle">
              <p>{asset.asset_title}</p>
              <AiFillInfoCircle className="info" />
            </div>
            <div className="description">
              <p>
                <span style={{ fontWeight: "600" }}>Description: </span>
                {asset.asset_description}
              </p>
            </div>
            <hr className="hr" />

            {asset.asset_type === "display_asset" ? (
              <div className="video">
                <iframe
                  width="560"
                  height="315"
                  src={asset.asset_content}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              ""
            )}

            {asset.asset_type === "input_asset" &&
            asset.asset_content_type === "threadbuilder" ? (
              <>
                <div className="header">
                  <p>
                    <FaChevronUp />
                  </p>
                  <h3>Thread A</h3>
                </div>
                <div className="main">
                  <div className="inputs">
                    <div className="subThread">
                      <div className="subTitle">Sub thread 1</div>
                      <div className="input">
                        <textarea
                          className="inputSelf"
                          placeholder="Enter Text here"
                        ></textarea>
                      </div>
                    </div>

                    <div className="subThread">
                      <div className="subTitle">Sub Interpretation 1</div>
                      <div className="input">
                        <textarea
                          className="inputSelf"
                          placeholder="Enter Text here"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="selects">
                    <div className="wrapper">
                      <div className="wrap">
                        <img src={Icons} alt="Icons" />
                      </div>

                      <select>
                        <option value="" selected disabled hidden>
                          Select Category
                        </option>
                        <option value="opt1">option1</option>
                        <option value="opt2">option2</option>
                      </select>
                      <select>
                        <option value="" selected disabled hidden>
                          Select Process
                        </option>
                        <option value="opt1">option1</option>
                        <option value="opt2">option2</option>
                      </select>
                    </div>
                  </div>

                  <div className="summaryThread">
                    <div className="subTitle">Summary for Thread A</div>
                    <div className="input">
                      <textarea
                        className="inputSelf"
                        placeholder="Enter Text here"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            {asset.asset_type === "input_asset" &&
            asset.asset_content_type === "article" ? (
              <div className="threadBuilder">
                <div className="header"></div>
                <div className="main">
                  <div className="inputTitle">
                    <label htmlFor="title" className="label">
                      Title
                    </label>
                    <input type="text" />
                  </div>

                  <div className="inputContent">
                    <label htmlFor="title" className="label">
                      Content
                    </label>

                    <div className="box">
                      <div className="tools"></div>
                      <textarea className="content"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Assets;
