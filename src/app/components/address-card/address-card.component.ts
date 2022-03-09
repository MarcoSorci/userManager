import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  
  @Input() address?: Address;

  constructor() {}

  ngOnInit(): void {}
}
