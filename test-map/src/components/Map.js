/* global google */

import React, { Component } from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
import farmIcon from '../images/farmhouse.png'

const googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDerJF-XX4BBOHwScvMo6QZXNROzQaiPCQ&libraries=geometry'

const image = new google.maps.MarkerImage(
  farmIcon,
  new google.maps.Size(71, 71),
  new google.maps.Point(0, 0),
  new google.maps.Point(17, 37),
  new google.maps.Size(25, 25)
)

const Map = withGoogleMap(
  props => (
    <GoogleMap
      zoom={5}
      center={{lat: 39.263128, lng: -94.643777}}
      googleMapURL={googleMapURL}
    >
      <Marker position={{ lat: 48.453946, lng: -122.440457 }} icon={image}/>
      <Marker position={{ lat: 26.332659, lng: -81.731989 }} icon={image}/>
    </GoogleMap>
  )
)

export default (Map)
