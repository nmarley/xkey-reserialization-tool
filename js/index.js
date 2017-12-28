var bitcoin = require('bitcoinjs-lib');
var base58check = require('bs58check');

$(document).ready(function() {

    $('#input_xkey').change(function() {
        var key = base58check.decode($('#input_xkey').val())
        key = key.slice(4)  // drop first 4 bytes, the version bytes

        // grab the 45th byte, examine. 01 == private, 02 or 03 == public
        var type_byte = key.slice(41, 42)
        var type_byte_hex = type_byte.toString('hex')
        // console.log("Key = [" + key.toString('hex') + "]")
        // console.log("type_byte = [" + type_byte.toString('hex') + "]")
        // console.log(type_byte)

        var version_bytes = undefined
        if (type_byte_hex == "01") {
          version_bytes = "0488ade4"
        }
        else if ((type_byte_hex == "02") || (type_byte_hex == "03")) {
          version_bytes = "0488b21e"
        }
        else {
          // alert("Take a dump. This isn't gonna work...")
          console.log("Error here")
        }

        // TODO: if private, can also derive/show the xpub key...
        // TODO: if private, hide the key and place a "display" link...
        key = Buffer.concat([Buffer.from(version_bytes, 'hex'), key])
        // console.log("New Key = [" + key.toString('hex') + "]")

        var xkey = base58check.encode(key)
        console.log("New XKey = [" + xkey + "]")

        $('#output_xkey').val(xkey)

        // // Dash BIP32 pubkeys start with 'xpub' (Bitcoin defaults)
        // base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
        // // Dash BIP32 prvkeys start with 'xprv' (Bitcoin defaults)
        // base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();

        // determine whether public/private based on key type
        // key = Buffer.concat([Buffer.from])
    });

    $('#payment_amount').on('input',function(){
      //As of now, core doesn't handle comma, but handle dots. Therefore we change it to the user.
      var payment_amount_value = $('#payment_amount').val();
      $('#payment_amount').val(payment_amount_value.replace(/,/g, '.'));
    });

});
