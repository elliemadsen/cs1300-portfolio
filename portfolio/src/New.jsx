import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";


class New extends Component {
    render() {
      return (
    <div>
        <Header/>
        <div class="body">
        <div class="title">
            <h1> personas + storyboarding </h1>
        </div>
        <div class="section">
            <h3 class="btext"> The design of the sewing machine has changed little since 1851. Does today's computerized machine meet the needs of the modern user? </h3>
        </div>
        <div class="section">
            <h2 class="heading"> Interface </h2>
            <p class="btext"> To explore the interface of the modern sewing machine, I focused on the Brother CS5055PRW Project Runway Computerized Sewing Machine. Illustrated below, this machine is beginner-friendly while including a variety of stitches and settings for experienced users. To use the machine, the user must wind and insert the bobbin, thread the machine and needle, and finally sew by pressing the foot pedal while guiding the fabric. </p>
            <img src="machine-sketch.svg" alt="Sketch of a sewing machine with labeled parts" class="image" id="sketch"/>
        </div>
        <div class ="section">
        <h2 class="heading"> User Observations </h2>
        <p class="btext"> I observed three users of different experience levels using the sewing machine. With the aid of the user manual and labeled drawings on the sewing machine, they each wound the bobbin, threaded the needle, and sewed a straight line on a piece of fabric. </p>
        <div class="grid-1by3">
            <div class="block1">
            <h3 class="btext">User 1</h3>
            <h5 class="btext">Has never used a sewing machine</h5>
            <ul class="btext">
                <li>Used the drawings on the machine more than the user manual</li>
                <li>Struggled to maneuver the thread without it unwinding</li>
                <li>“This is so tricky”</li>
                <li>Asked what names like “presser foot” referred to</li>
                <li>Lost track of what step he was on in the user manual</li>
                <li>Asked for verbal confirmation</li>
            </ul>
            </div>
            <div class="block2">
            <h3 class="btext">User 2</h3>
            <h5 class="btext">Has not used a sewing machine since they were 12</h5>
            <ul class="btext">
                <li>Used the drawings on the machine, but not the user manual</li>
                <li>“It’s been a while since I did this”</li>
                <li>Quickly recalled the steps that involved physical movements, like winding up and down or pressing the foot</li>
                <li>“This machine is so weird”</li>
            </ul>
        </div>
            <div class="block3">
            <h3 class="btext">User 3</h3>
            <h5 class="btext">Regularly uses the exact model of sewing machine</h5>
            <ul class="btext">
                <li>Did not use the drawings on the machine or the user manual</li>
                <li>Asked for specific tools to help him with different steps</li>
                <li>Used the unlabeled buttons and changed the settings</li>
                <li>Was confident maneuvering the thread</li>
                <li>Was impatient when sewing a long seam and tried to multitask</li>
                <li>Finished very quickly</li>
            </ul>
        </div>
        </div>
        </div>
        <div class ="section">
        <h2 class="heading"> User Interviews </h2>
        <h3 class="btext"> Interview Questions </h3>
        <ol class="btext">
        <li>What is your previous experience using a sewing machine?</li>
        <li>What interactions come to mind when thinking of sewing?</li>
        <li>What was your initial reaction to this sewing machine?</li>
        <li>What thoughts were going through your head throughout this process?</li>
        <li>What actions did you find intuitive?</li>
        <li>What actions did you struggle to figure out?</li>
        <li>What parts of the interface would you improve?</li>
        <li>On a scale of 1 to 10, rate the helpfulness of the numbered drawings.</li>
        <li>On a scale of 1 to 10, rate the helpfulness of the user manual.</li>
            <li>Were you surprised by anything throughout the process?</li>
        </ol>
        <h3 class="btext"> Interview Responses </h3>
        <div class="grid-1by3">
            <div class="block1">
            <h3 class="btext">User 1</h3>
            <ul class="btext">
                <li>Initial reaction was that the machine looked high tech</li>
                <li>Frustrated by trying to wind the bobbin</li>
                <li>Struggled to understand the transition between steps</li>
                <li>Threading the needle and sewing were intuitive to him</li>
                <li>Thought a video demonstration would have been helpful</li>
                <li>Thought that the drawings on the machine and the user manual should be color coded, but rated them both an 8 for helpfulness</li>
            </ul>
            </div>
            <div class="block2">
            <h3 class="btext">User 2</h3>
            <ul class="btext">
                <li>Was thinking “oh god, am I doing this wrong?” throughout the process</li>
                <li>Struggled to figure out how to wind the bobbin since it was different from the machine she was used to</li>
                <li>After winding the bobbin, found the remaining steps intuitive</li>
                <li>Thought the order of drawings on the machines was unclear, and they should be located in different areas</li>
                <li>Rated the helpfulness of the drawings as an 8</li>
            </ul>
        </div>
            <div class="block3">
            <h3 class="btext">User 3</h3>
            <ul class="btext">
                <li>Despite not using the machine in a few months, it was instinctive and he did things without realizing</li>
                <li>Forgot how to wind the bobbin at first but quickly recalled</li>
                <li>Wishes the side panel was able to open</li>
                <li>Would improve the interface by creating a physically indented trail for winding the bobbin</li>
                <li>Rated the helpfulness of the drawings as a 10</li>
            </ul>
        </div>
        </div>
        </div>
        <div class ="section">
            <h2 class="heading"> Personas </h2>
        <p class="btext">I created two personas based on the observations and interview responses I gathered in the research phase. To ensure my personas are composite archetypes, I grouped similar usage patterns across the three users.</p>
        <div class="grid-1by2">
        <div class="block1">
            <h2 class="btext">Eva</h2>
            <p class="btext">Eva used a sewing machine when she was 11, and now she’s trying to mend a dress to wear to a dinner party. She only needs to do a single straight stitch but doesn’t remember how to thread the machine.</p>
            <img src="empathy-map-eva.svg" alt="Empathy map of Eva." class="image"/>
            <p class="btext">Eva represents a new or inexperienced user. The main problem she faces is mapping the user manual instructions and labeled drawings into action. She struggles to interpret the state of the machine to determine whether her intentions were met.</p>
        </div>
        <div class="block2">
            <h2 class="btext">Angel</h2>
            <p class="btext">Angel regularly uses his sewing machine for hours at a time to make custom clothes for his online shop. He works as quickly as he can and uses complicated stitches and settings for different materials.</p>
            <img src="empathy-map-angel.svg" alt="Empathy map of Angel." class="image"/>
            <p class="btext">Angel represents an experienced user who often uses this machine. His problems with the interface are things that slow him down and interrupt his experience: the speed of the machine, changing the bobbin, and breaking a needle.</p>
        </div>
        </div>
        </div>
        <div class ="section">
        <h2 class="heading"> Storyboard </h2>
        <p class="btext">To visually explore my persona’s experience using the sewing machine, I created a storyboard of Eva’s user journey from start to end.</p>
        <img src="storyboard.svg" alt="Storyboard visualizing the persona Eva using the sewing machine." class="image"/>
        </div>
        <div class="section">
            <h2 class="heading"> Results </h2>
            <p class="btext"> While the experienced user operated the sewing machine with ease, it's clear that the interface is inaccessible to new users. When winding the bobbin and threading the machine, users struggled with both execution (mapping their intentions to specific actions) and evaluation (interpreting the state of the system to determine whether their intentions were met). </p>
            </div>
    </div>
    <Footer/>

    </div>



      );
    }
  }
  
  export default New;