"use client";
import { Button } from "../ui/button";
import React, { useState } from 'react';

export function NavBar() {
  const [isCostShown, setIsCostShown] = useState(false);
  const [isFailoverShown, setIsFailoverShown] = useState(false);
  const [isMigrationShown, setIsMigrationShown] = useState(false);
  const [isTextToGraphShown, setIsTextToGraphShown] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", padding: 10, borderColor: "#888888 !important", borderBottom: 1, borderStyle: "solid" }}>
        <div style={{ flex: 1 }}></div>
        <img style={{ height: 26 }} src="https://www.mongodb.com/favicon.ico" />
        <b style={{ fontSize: 20, color: "#00ED64" }}>Leafy</b>
        <b style={{ fontSize: 20, color: "white" }}>CRM</b>
        <div style={{ flex: 1, textAlign: "right" }}>
          <Button
            onClick={() => {
              setIsCostShown(false);
              setIsFailoverShown(false);
              setIsMigrationShown(false);
              setIsTextToGraphShown(false);
            }}
            style={{
              background: "#0090c9",
              color: "black",
              fontWeight: "bold"
            }}
          >
            Home
          </Button>
          <Button
            style={{
              marginLeft: 5,
              background: "#0090c9",
              color: "black",
              fontWeight: "bold"
            }}
            onClick={() => {
              setIsCostShown(true);
              setIsFailoverShown(false);
              setIsMigrationShown(false);
              setIsTextToGraphShown(false);
            }}
          >
            Cost
          </Button>
          <Button
            style={{
              marginLeft: 5,
              background: "#0090c9",
              color: "black",
              fontWeight: "bold"
            }}
            onClick={() => {
              setIsCostShown(false);
              setIsFailoverShown(true);
              setIsMigrationShown(false);
              setIsTextToGraphShown(false);
            }}
          >
            Failover Simulation
          </Button>
        <Button
          style={{
            marginLeft: 5,
            background: "#0090c9",
            color: "black",
            fontWeight: "bold"
          }}
          onClick={() => {
            setIsCostShown(false);
            setIsFailoverShown(false);
            setIsMigrationShown(true);
            setIsTextToGraphShown(false);
          }}
        >
          Migration
        </Button>
        <Button
          style={{
            marginLeft: 5,
            background: "#0090c9",
            color: "black",
            fontWeight: "bold"
          }}
          onClick={() => {
            setIsCostShown(false);
            setIsFailoverShown(false);
            setIsMigrationShown(false);
            setIsTextToGraphShown(true);
          }}
        >
          Text to Graph
        </Button>
        </div>
      </div>
      {isCostShown && <>
      <div style={{ textAlign: "right", marginRight: 10, marginTop: 5, marginBottom: 5 }}> 
        <Button
          style={{
        marginLeft: 5,
        background: "#0090c9",
        color: "black",
        fontWeight: "bold"
          }}
          onClick={() => {
        window.open('http://ec2-43-204-218-17.ap-south-1.compute.amazonaws.com/', '_blank');
          }}
        >
          Calculator
        </Button>
      </div>
     
      <div style={{ position: "absolute", zIndex: 99999, top: 113, bottom: 10, background: "#001E2B", display: "flex", left: 10, right: 10 }} >
        <div style={{ flex: 1 }}></div>
        <div style={{ overflow: "hidden", height: "100%", width: 1352 }} >
          <iframe style={{ marginTop: -23, marginLeft: -48, height: "calc(100% + 23px)", width: 1420 }} src="./TCO.html" />
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
      </>
      }
      {isFailoverShown && <div style={{ position: "absolute", zIndex: 99999, top: 57, bottom: 10, background: "#001E2B", display: "flex", left: 10, right: 10 }} >
        <div style={{ flex: 1 }}></div>
        <video src="./ha.mov" autoPlay />
        <div style={{ flex: 1 }}></div>
      </div>}
      {isMigrationShown && <div style={{ position: "absolute", zIndex: 99999, top: 57, bottom: 10, background: "#001E2B", display: "flex", left: 10, right: 10 }} >
        <div style={{ flex: 1 }}></div>
        <video src="./rm.mov" autoPlay />
        <div style={{ flex: 1 }}></div>
      </div>}
      {isTextToGraphShown && <div style={{ position: "absolute", zIndex: 99999, top: 57, bottom: 10, background: "#001E2B", display: "flex", left: 10, right: 10 }} >
        <div style={{ flex: 1 }}></div>
        <video src="./text-to-graph.mov" autoPlay />
        <div style={{ flex: 1 }}></div>
      </div>}
    </div>
  )
}