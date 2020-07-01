import React, { useState, useContext } from "react";
import "./AboutContent.scss";
import { LanguageContext } from "../../../App";

function AboutEN() {
  const { isLanguageEnglish } = useContext(LanguageContext);
  const [isExtendedInfoVisible, setIsExtendedInfoVisible] = useState(false);

  return (
    <div className="wrapper__about">
      <article>
        <h2>Basic Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis
          nisi, consequat et lorem sit amet, sollicitudin laoreet mauris. Etiam
          ut tellus scelerisque, tristique lorem a, cursus quam. Morbi sodales
          nibh a risus interdum consequat. Fusce vel ultricies nisl. Curabitur
          non quam laoreet, mattis augue ac, scelerisque eros. Duis aliquet
          rutrum risus, eget bibendum enim aliquam at. Vestibulum commodo
          pharetra nunc, in semper ante pretium quis. Nam at purus in eros
          pellentesque lobortis. Sed cursus sapien ipsum, cursus fermentum risus
          lobortis vitae.
        </p>
        <p>
          Praesent lacinia cursus mauris, pulvinar placerat turpis pulvinar non.
          Fusce et mauris eu nulla efficitur volutpat. Donec accumsan, sapien
          sit amet consectetur mollis, lorem mauris pretium magna, sit amet
          porta lectus ex et augue. Nulla nec arcu vel urna lacinia accumsan.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Integer facilisis purus eleifend turpis
          efficitur, quis pharetra tortor aliquam. Vestibulum venenatis, felis
          at efficitur dignissim, quam ante luctus metus, auctor venenatis enim
          mi sit amet ligula. Proin laoreet est ut porta tempor. Cras nec
          fermentum justo. Phasellus hendrerit eleifend euismod. Morbi et turpis
          ut eros mattis auctor. In hac habitasse platea dictumst. Donec a
          porttitor lorem. Nunc tempor eu arcu sit amet sagittis. Morbi eu
          tristique mauris.
        </p>
      </article>

      {/* BUTTON*/}
      <button
        onClick={() => setIsExtendedInfoVisible(true)}
        className={isExtendedInfoVisible ? "invisible" : ""}
      >
        {isLanguageEnglish && "Give me more"}
      </button>

      {/*EXTENDED*/}
      {isExtendedInfoVisible && (
        <article className="extended">
          <article>
            <h2>Extended Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis
              nisi, consequat et lorem sit amet, sollicitudin laoreet mauris.
              Etiam ut tellus scelerisque, tristique lorem a, cursus quam. Morbi
              sodales nibh a risus interdum consequat. Fusce vel ultricies nisl.
              Curabitur non quam laoreet, mattis augue ac, scelerisque eros.
              Duis aliquet rutrum risus, eget bibendum enim aliquam at.
              Vestibulum commodo pharetra nunc, in semper ante pretium quis. Nam
              at purus in eros pellentesque lobortis. Sed cursus sapien ipsum,
              cursus fermentum risus lobortis vitae.
            </p>
            <p>
              Praesent lacinia cursus mauris, pulvinar placerat turpis pulvinar
              non. Fusce et mauris eu nulla efficitur volutpat. Donec accumsan,
              sapien sit amet consectetur mollis, lorem mauris pretium magna,
              sit amet porta lectus ex et augue. Nulla nec arcu vel urna lacinia
              accumsan. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Integer facilisis purus
              eleifend turpis efficitur, quis pharetra tortor aliquam.
              Vestibulum venenatis, felis at efficitur dignissim, quam ante
              luctus metus, auctor venenatis enim mi sit amet ligula. Proin
              laoreet est ut porta tempor. Cras nec fermentum justo. Phasellus
              hendrerit eleifend euismod. Morbi et turpis ut eros mattis auctor.
              In hac habitasse platea dictumst. Donec a porttitor lorem. Nunc
              tempor eu arcu sit amet sagittis. Morbi eu tristique mauris.
            </p>
          </article>
        </article>
      )}
    </div>
  );
}

//TODO: clone above when it's ready and translate to german
export function AboutDE() {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <>
      <h2>GERMAN Basic Introduction</h2>
      {/* TODO: article gives padding, where does it come from? */}
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
        lectus non odio venenatis luctus. Vestibulum scelerisque felis vitae
        purus iaculis, lobortis mollis diam convallis. Integer condimentum,
        massa sed dapibus cursus, justo nisi ullamcorper turpis, in blandit
        lacus est vitae ex. Proin bibendum ipsum in tincidunt vestibulum. Proin
        quis leo orci. Sed eu congue sapien. Ut non elit massa. Donec
        ullamcorper justo ipsum, vel imperdiet risus rhoncus vel. Nulla in
        convallis arcu. Ut quis ultricies magna, sed tincidunt risus. Sed
        placerat sagittis diam at volutpat. Phasellus leo erat, congue eget nunc
        ut, iaculis dapibus est. Etiam risus magna, varius vitae consectetur
        sed, vestibulum quis justo. Curabitur at faucibus ipsum. Cras imperdiet,
        sapien a finibus condimentum, mauris nulla volutpat massa, at vestibulum
        dui ligula a ex. Sed porttitor lacus a ultrices porttitor.
      </article>
      {/* BUTTON + EXTENDED */}
      <button onClick={() => setIsExtended(prev => !prev)}>
        {isExtended ? "weniger ist besser" : "gib es mir"}
      </button>
      {isExtended && (
        <article className="extended">
          <h2>Extended information</h2>
          {/* TODO: add nav to sections of text */}
          <h5>where does my knowledge come from? (UDEMI/EDABIT/BOOKS)</h5>
          <h5>what did I study?</h5>
          <h5>what are my hobbies</h5>
          <h5>Certificates</h5>
          <p>
            Donec gravida vestibulum justo, at pretium dolor consectetur non.
            Morbi et tincidunt arcu. Vestibulum arcu lacus, pellentesque id
            dictum at, sagittis nec ligula. Fusce ultrices quam a odio dictum,
            quis sollicitudin nibh venenatis. Suspendisse non scelerisque dolor.
            Sed molestie, odio nec feugiat pellentesque, ligula eros finibus
            ligula, in egestas nibh augue vitae nisl. Aenean dictum libero eu
            lectus faucibus auctor. Phasellus purus ipsum, auctor eu auctor
            eget, iaculis ut ligula. Aenean auctor justo risus, at aliquam lorem
            mattis viverra. Vestibulum vel facilisis nulla, eget bibendum
            tellus. Duis semper neque congue, scelerisque elit ac, venenatis
            turpis. Quisque tristique, augue sed interdum laoreet, tellus erat
            aliquet libero, et viverra libero nisl eget diam. Donec ullamcorper
            mi nec ex convallis feugiat.
          </p>
        </article>
      )}
    </>
  );
}

export default AboutEN;
