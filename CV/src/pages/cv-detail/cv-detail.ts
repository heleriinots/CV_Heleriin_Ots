/**
 * Created by Heleriin on 17/04/2017.
 */


import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'cv-item-detail',
  templateUrl: 'cv-detail.html'
})


export class CVDetailPage {

  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }
}


/*
 import { Component } from '@angular/core';
 +
 +import { NavController, NavParams } from 'ionic-angular';
 +
 +
 +@Component({
 +  selector: 'page-item-details',
 +  templateUrl: 'item-details.html'
 +})
 +export class ItemDetailsPage {
 +  selectedItem: any;
 +
 +  constructor(public navCtrl: NavController, public navParams: NavParams) {
 +    // If we navigated to this page, we will have an item available as a nav param
 +    this.selectedItem = navParams.get('item');
 +  }
 +}
 */
