import {expect} from 'chai';
import {romanize} from '../src/converter';

describe('romanize', () => {
  it('converts 1', function() {
    expect(romanize(1)).to.equal('I');
  });
  it('converts 2', function() {
    expect(romanize(2)).to.equal('II');
  });

  it('converts 3', function() {
    expect(romanize(3)).to.equal('III');
  });

  it('converts 4', function() {
    expect(romanize(4)).to.equal('IV');
  });

  it('converts 5', function() {
    expect(romanize(5)).to.equal('V');
  });

  it('converts 6', function() {
    expect(romanize(6)).to.equal('VI');
  });

  it('converts 9', function() {
    expect(romanize(9)).to.equal('IX');
  });

  it('converts 27', function() {
    expect(romanize(27)).to.equal('XXVII');
  });

  it('converts 48', function() {
    expect(romanize(48)).to.equal('XLVIII');
  });

  it('converts 59', function() {
    expect(romanize(59)).to.equal('LIX');
  });

  it('converts 93', function() {
    expect(romanize(93)).to.equal('XCIII');
  });

  it('converts 141', function() {
    expect(romanize(141)).to.equal('CXLI');
  });

  it('converts 163', function() {
    expect(romanize(163)).to.equal('CLXIII');
  });

  it('converts 402', function() {
    expect(romanize(402)).to.equal('CDII');
  });

  it('converts 575', function() {
    expect(romanize(575)).to.equal('DLXXV');
  });

  it('converts 911', function() {
    expect(romanize(911)).to.equal('CMXI');
  });

  it('converts 1024', function() {
    expect(romanize(1024)).to.equal('MXXIV');
  });

  it('converts 3000', function() {
    expect(romanize(3000)).to.equal('MMM');
  });
});
