"use client";

export default function button() {
    const styles = {
        border:"1px Solid White",
        backgroundColor:"white"
    }
  return (
    <>
        <button className={styles} onClick={()=>{console.log("He clicked me")}}>
        Click me babe
        </button>
       </>
  )
}
