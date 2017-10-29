

var testArea = document.getElementById("testContainer");
var someTestGroup;

function test_group(testGroupName, asserts) {
    someTestGroup = document.createElement("div");
    testArea.appendChild(someTestGroup);
    someTestGroup.setAttribute("class","row");
    someTestGroup.setAttribute("role","alert");
    someTestGroup.setAttribute("class","alert alert-success");

    asserts();
}

function assert(passed, testName)
{
    var assertName = document.createElement("div");
    assertName.innerHTML = "<label>" + testName + "</label>";
    assertName.setAttribute("role", "alert");
    if(passed === true)
    {
        assertName.setAttribute("class","alert alert-success");
    }
    else
    {
        someTestGroup.setAttribute("class","alert alert-danger");
        assertName.setAttribute("class","alert alert-danger");
    }

    someTestGroup.appendChild(assertName);
}

test_group('second test group', function() {
    assert(true, "simple successful test");
    assert(true, "simple unsuccessful test 2");
    assert(true, "simple unsuccessful test 3");


});

test_group('second test group', function() {
    assert(false, "simple successful test");
    assert(true, "simple unsuccessful test 2");
    assert(true, "simple unsuccessful test 3");


});
