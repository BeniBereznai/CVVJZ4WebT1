
    function showMessage() {
      // Megjeleníti a felugró ablakot
      var modal = document.getElementById("myModal");
      modal.style.display = "block";

      // Beállítja a bezáró gomb működését
      var closeBtn = document.getElementById("closeBtn");
      closeBtn.onclick = function() {
        modal.style.display = "none"; // Ablak elrejtése bezárásnál
      }
    }

    // Számláló inicializálása
    var purchaseCount = 0;

    function showMessage() {
      // Megjeleníti a felugró ablakot
      var modal = document.getElementById("myModal");
      modal.style.display = "block";

      // Növeljük a vásárlások számát
      purchaseCount++;
      updatePurchaseCount();  // Frissítjük a vásárlások számát a felhasználó számára

      // Beállítja a bezáró gomb működését
      var closeBtn = document.getElementById("closeBtn");
      closeBtn.onclick = function() {
        modal.style.display = "none"; // Ablak elrejtése bezárásnál
      }
    }

    // Frissíti a vásárlások számát a felhasználó számára
    function updatePurchaseCount() {
      var purchaseCountElement = document.getElementById("purchaseCount");
      purchaseCountElement.innerText = purchaseCount;
    }
    var purchaseCount = 0;

    function showMessage() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";

      purchaseCount++;
      updatePurchaseCount();

      var closeBtn = document.getElementById("closeBtn");
      closeBtn.onclick = function() {
        modal.style.display = "none";
      }
    }

    function updatePurchaseCount() {
      var purchaseCountElement = document.getElementById("purchaseCount");
      purchaseCountElement.innerText = purchaseCount;
    }

    // Új funkció a kosár ikonra kattintáshoz
    function showCartItems() {
      var cartItemsModal = document.getElementById("cartItemsModal");
      cartItemsModal.style.display = "block";

      // Beállítjuk a kosár elemeket tartalmazó részt (itt lehet betölteni dinamikusan az elemeket a kosárból)
      var cartItemsContent = document.getElementById("cartItemsContent");
      cartItemsContent.innerHTML = "Itt lehet dinamikusan hozzáadni a kosárban lévő elemeket.";
    }

    // Bezáró gomb a kosár elemek megjelenítéséhez
    var closeCartBtn = document.getElementById("closeCartBtn");
    closeCartBtn.onclick = function() {
      var cartItemsModal = document.getElementById("cartItemsModal");
      cartItemsModal.style.display = "none";
    }
    document.addEventListener('DOMContentLoaded', function() {
      var themeDropdown = document.getElementById('themeDropdown');
      var themeOptions = document.getElementById('themeOptions');
  
      themeDropdown.addEventListener('click', function(event) {
        if (themeOptions.style.display === 'none' || themeOptions.style.display === '') {
          themeOptions.style.display = 'block';
        } else {
          themeOptions.style.display = 'none';
        }
      });    
    }); 